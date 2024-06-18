// Import the 'stripe' module
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { jwtEncrypt, SignJWT } from "jose";
import {insertPayment, insertSubscription, isActiveSubscriber }from "../controllers/subscriptionController";

// Initialize the Stripe object with your secret key
const stripe = new Stripe(
  "sk_test_51PQOvg07HRkzWOMzAPKBm0BhuIMwDj8jEpxkJh0W8auhAVXuiD2grqooyNKhelUKkAOf51OtYqUpQTMex2ocTFCd004ghD07w7",
  {
    apiVersion: "2020-08-27",
  }
);

// Define your POST request handler
export async function POST(req, res) {
  const data = await req.json();




  try {
    //console.log(data.paymentMethodId, data.amount, data.currency, data.email);

    console.log("user is ", data.user);

    const endDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);

    console.log("endDate is ", endDate);
    const subData = {
      type: "Premium",
      email: data.user.email,
      billing_cycle: "Monthly",
      subscription_status: "active",
      endDate: endDate,
    };
    console.log("subData is ", subData);  
    
    


    const isActive = await isActiveSubscriber(data.user.email);
    console.log("isActive is ", isActive);
    if (!isActive) {

    const paymentIntent = await stripe.paymentIntents.create({
      amount: data.amount,
      currency: "usd",
      payment_method: data.paymentMethodId,
      confirm: true,
      off_session: true,
      
    });

    console.log("PaymentIntent created:", paymentIntent);
    console.log("Status:", paymentIntent.status);

    const payData = {
      method: "stripe",
      paymentMethodId: data.paymentMethodId,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      paidBy: data.user.email,
      billing_address: data.user.email,
      status: paymentIntent.status,
    }
    

    if (paymentIntent.status === "succeeded") {
    
      //const user = await insertPayment(subData);
      
      const subscription = await  insertSubscription(subData);
      const payment = await insertPayment(payData);
      if (subscription && payment) {
        const token = await createToken(subscription, process.env.JWT_SECRET, "30d");
        console.log("token is ", token);
    
        return NextResponse.json({ success: true, data: paymentIntent, token, subscription });
      } else {
        return NextResponse.json("User not found", { status: 401 });
      }
    
    }else {
      return NextResponse.json("Payment failed", { status: 401 });
    }
  }else {
    return NextResponse.json("User already subscribed", { status: 401 });
  }
    
  } catch (error) {
    console.error(error);
    return Response.status(500).json({ error: { message: error.message } });
  }
}
const createToken = async (user, secret_key, exp) => {
  const secret = new TextEncoder().encode(secret_key);
  const jwt = await new SignJWT(user)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(exp)
    .sign(secret);
  return jwt;
};

