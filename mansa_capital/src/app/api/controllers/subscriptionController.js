import connectDB from "../../../../config/database";
import subscriptionSchema from "../../../../models/subscriptionSchema";
import Stripe from "stripe";
import paymentSchema from "../../../../models/paymentSchema";

const stripe = new Stripe(
  "sk_test_51PQOvg07HRkzWOMzAPKBm0BhuIMwDj8jEpxkJh0W8auhAVXuiD2grqooyNKhelUKkAOf51OtYqUpQTMex2ocTFCd004ghD07w7",
  {
    apiVersion: "2020-08-27",
  }
);

export async function isActiveSubscriber(email) {
  try {
    console.log("Connecting to the database...");
    await connectDB();
    const isOldSubscriber = await subscriptionSchema.findOne({
      email: email,
    });

    if (isOldSubscriber) {
      const isActive = await subscriptionSchema.findOne({
        subscription_status: "active",
      });
      if (!isActive) {
        console.log("User is old subscriber");
        return null;
      }
      console.log("User is an active subscriber");
      return isOldSubscriber ? { ...isOldSubscriber._doc } : null;
    }
    console.log("User is not an subscriber");
    return null;
  } catch (error) {
    console.error("Error fetching subscription:", error);
    return null; // Handle error appropriately
  }
}

export async function insertSubscription(data) {
  try {
    console.log("Connecting to the database...");
    await connectDB();
    const isOldSubscriber = await subscriptionSchema.findOne({
      email: data.email,
    });
    if (isOldSubscriber) {
      const updatedSubscription= await subscriptionSchema.findOneAndUpdate(
        { email: data.email },
        {
          endDate: data.endDate,
          subscription_status: "active",
          billing_cycle: data.billing_cycle,
        }
      );
      console.log("User subscription updated successfully.");
      return updatedSubscription ? { ...updatedSubscription._doc } : null;
    }
    const newSubscription = await subscriptionSchema.create({ ...data });
    console.log("New user subscription created successfully.");

    return newSubscription ? { ...newSubscription._doc } : null;
  } catch (error) {
    console.error("Error fetching subscription:", error);
    return null; // Handle error appropriately
  }
}

export async function insertPayment(data) {
  try {
    await connectDB();

    const payment = await paymentSchema.create({ ...data });
    console.log("User payment created successfully.");

    return payment ? { ...payment._doc } : null;
  } catch (error) {
    console.error("Error fetching payment:", error);
    return null; // Handle error appropriately
  }
}

export async function subsById(email) {
  try {
    console.log('subscription of', email);
    await connectDB(); // Ensure the database connection is successful

    // Find accounts where the 'created_by' field matches the provided email
    const subscription = await subscriptionSchema.find({ email: email });

    if (!subscription) {
      console.log('No subscription found for', email);
      return null; // Return empty array if no accounts are found
    }

    console.log('subscription fetched successfully.', subscription);
    return subscription;
    console.log('subscription fetched successfully 2.');
  } catch (err) {
    console.error('Error fetching subscription:', err);
    throw new Error('Failed to fetch subscription'); // Rethrow the error to propagate it further
  }
}

export async function price() {
    const price = await stripe.prices.create({
      unit_amount: 1000, // Amount in cents
      currency: 'usd',
      recurring: { interval: 'month' }, // Interval of billing
      product_data: {
        name: 'Premium Subscription',
      },
    });
    console.log('Price object created:', price);
  return price;
}

