// Import the 'stripe' module
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { jwtEncrypt, SignJWT } from "jose";
import {subsById, insertPayment, insertSubscription, isActiveSubscriber }from "../../controllers/subscriptionController";

// Initialize the Stripe object with your secret key
const stripe = new Stripe(
  "sk_test_51PQOvg07HRkzWOMzAPKBm0BhuIMwDj8jEpxkJh0W8auhAVXuiD2grqooyNKhelUKkAOf51OtYqUpQTMex2ocTFCd004ghD07w7",
  {
    apiVersion: "2020-08-27",
  }
);

  export async function GET(request, context) {
    try {
      const { searchParams } = new URL(request.url);
      
      const email = searchParams.get('email');
      console.log("email is ",email);
  
      if (!email) {
        return NextResponse.json({ error: 'Missing "created_by" query parameter' }, { status: 400 });
      }
  
      const subsData = await subsById(email);
      // if (!subsData || subsData.length === 0) {
      //   console.log("No subscriptions found for the provided email");
      //   return Response.json({ error: 'No subscriptions found for the provided email' }, { status: 404 });
      // }
      console.log("subsData is ",subsData);
  
      return Response.json(subsData);
    } catch (error) {
      console.error('Error fetching subscriber data:', error);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  }

  
  

// Define your POST request handler
export async function POST(req, res) {
  const data = await req.json();

  try {
    // Check if customer exists; create if not
    console.log("checking if customer exists");
    let customers = await stripe.customers.list({ email: data.user.email });
    let customer = customers.data.length > 0 ? customers.data[0] : null;
    if (!customer) {
      customer = await stripe.customers.create({
        email: data.user.email,
        name: data.user.name, // Optional: Include customer name if available
        address: data.user.address // Optional: Include customer address if available
      });
      console.log('Customer created:', customer);
    }

    
    
    // Check if customer is already an active subscriber
    const isActive = await isActiveSubscriber(data.user.email);
    if (isActive) {
      return NextResponse.json("User already subscribed", { status: 401 });
    }

    // Create payment intent for subscription
    const paymentIntent = await stripe.paymentIntents.create({
      amount: data.amount,
      currency: "usd",
      payment_method: data.paymentMethodId,
      confirm: true,
      off_session: true,
      customer: customer.id, // Use Stripe customer ID
    });

    console.log("PaymentIntent created:", paymentIntent);
    console.log("Status:", paymentIntent.status);

    // Create subscription schedule with Stripe
    const subscriptionSchedule = await stripe.subscriptionSchedules.create({
      customer: customer.id, // Replace with actual customer ID
      start_date: Math.floor(Date.now() / 1000), // Start immediately (current time)
      end_behavior: 'release',
      phases: [
        {
          items: [
            {
              price: 'price_1PTKeO07HRkzWOMz9R6oFLty', // Replace with actual price ID
              quantity: 1,
            },
          ],
          iterations: 12, // Number of billing cycles
        },
      ],
    });
    console.log("Subscription schedule created:", subscriptionSchedule);

    // Prepare data for database insertion
    const subData = {
      type: "Premium",
      email: data.user.email,
      billing_cycle: "Monthly",
      subscription_status: "active",
      endDate: getFixedDayOfMonthEndDate(),
    };

    // Insert subscription and payment into database
    const subscription = await insertSubscription(subData);
    const payData = {
      method: "stripe",
      paymentMethodId: data.paymentMethodId,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      paidBy: data.user.email,
      billing_address: data.user.email,
      status: paymentIntent.status,
    };
    const payment = await insertPayment(payData);

    // Generate JWT token for the subscription
    const token = await createToken(subscription, process.env.JWT_SECRET, "30d");
    console.log("Token generated:", token);

    // Return success response with relevant data
    return NextResponse.json({
      success: true,
      data: paymentIntent,
      token,
      subscription,
      subscriptionScheduleId: subscriptionSchedule.id,
    });

  } catch (error) {
    console.error('Error processing subscription:', error);
    return NextResponse.json({ error: { message: error.message } }, { status: 500 });
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

function getFixedDayOfMonthEndDate() {
  // Get current date
  const currentDate = new Date();

  // Set the day of the month to today's date
  const fixedDayOfMonth = currentDate.getDate(); // This sets the day to today's date

  // Calculate the next fixed day of the month
  let endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), fixedDayOfMonth);

  // Check if the calculated date has passed this month, if so, move to the next month
  if (currentDate.getDate() > fixedDayOfMonth) {
    endDate.setMonth(endDate.getMonth() + 1);
  }

  return endDate;
}

async function createCustomer(email, name, address) {
  try {
    const customer = await stripe.customers.create({
      email: email,
      name: name, // Optional: Customer's name
      address: { // Optional: Customer's address
        line1: address.line1,
        line2: address.line2,
        city: address.city,
        state: address.state,
        postal_code: address.postal_code,
        country: address.country,
      },
      // Add more parameters as needed
    });
    console.log('Customer created:', customer);
    return customer;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
}

// Example usage:
const endDate = getFixedDayOfMonthEndDate();
console.log(endDate);


