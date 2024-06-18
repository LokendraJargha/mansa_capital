// src/app/auth/payment3/page.jsx
"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Checkout"; // Import your CheckoutForm component

const stripePromise = loadStripe(
  "pk_test_51PQOvg07HRkzWOMzHX5sbsknZvRmh64fbviErrBKWznfenfLJPQXPp1TQrVxqxNzkuhlhaC5SOWln8VxShyQ0msy00QNtyBOJg"
); // Replace 'YOUR_PUBLISHABLE_KEY' with your actual publishable key

export default function PaymentPage() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
