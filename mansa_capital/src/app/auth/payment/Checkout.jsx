import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastContainer, toast } from "react-toastify";
import useAuthStore from "../../../../config/userStore";

const CheckoutForm = () => {
  const { loggedInUserData } = useAuthStore();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cardErrors, setCardErrors] = useState({
    cardNumber: null,
    cardExpiry: null,
    cardCvc: null,
  });
  const userEmail = loggedInUserData?.email;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const AMOUNT_TO_PAY = 1000; // Example amount in cents (e.g., $10.00)
  const CURRENCY_CODE = "USD"; // Example currency code

  const handleCardNumberChange = (event) => {
    if (event.empty) {
      setCardErrors((prev) => ({
        ...prev,
        cardNumber: "Card number is required",
      }));
    } else if (event.error) {
      setCardErrors((prev) => ({
        ...prev,
        cardNumber: event.error.message,
      }));
    } else if (!event.complete) {
      setCardErrors((prev) => ({
        ...prev,
        cardNumber: "Incomplete card number",
      }));
    } else {
      setCardErrors((prev) => ({
        ...prev,
        cardNumber: null,
      }));
    }
  };

  const handleCardExpiryChange = (event) => {
    if (event.empty) {
      setCardErrors((prev) => ({
        ...prev,
        cardExpiry: "Expiration date is required",
      }));
    } else if (event.error) {
      setCardErrors((prev) => ({
        ...prev,
        cardExpiry: event.error.message,
      }));
    } else if (!event.complete) {
      setCardErrors((prev) => ({
        ...prev,
        cardExpiry: "Incomplete expiration date",
      }));
    } else {
      setCardErrors((prev) => ({
        ...prev,
        cardExpiry: null,
      }));
    }
  };

  const handleCardCvcChange = (event) => {
    if (event.empty) {
      setCardErrors((prev) => ({
        ...prev,
        cardCvc: "CVC is required",
      }));
    } else if (event.error) {
      setCardErrors((prev) => ({
        ...prev,
        cardCvc: event.error.message,
      }));
    } else if (!event.complete) {
      setCardErrors((prev) => ({
        ...prev,
        cardCvc: "Incomplete CVC",
      }));
    } else {
      setCardErrors((prev) => ({
        ...prev,
        cardCvc: null,
      }));
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);

    if (Object.values(cardErrors).some((error) => error !== null)) {
      console.log("Card errors:", cardErrors);
      setIsLoading(false); // Stop loading if there are card errors
      return;
    }

    try {
      console.log("creating payment method");
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardNumberElement),
      });

      if (error) {
        throw new Error(error.message);
      }

      console.log("payment method is", paymentMethod);

      // Use the paymentMethod.id to retrieve the payment token
      console.log(
        "payment method id is",
        paymentMethod.id,
        "for",
        AMOUNT_TO_PAY,
        CURRENCY_CODE,
        loggedInUserData,
        data
      );

      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: AMOUNT_TO_PAY,
          currency: CURRENCY_CODE,
          user: loggedInUserData,
          subscriptionData: data, // Include additional form data
        }),
      });

      const responseData = await response.json();
      console.log(responseData);
      if (responseData.success) {
        toast("Account created successfully");
        reset(); // Reset the form after successful submission
        window.location.reload(); // Reload the page
      } else {
        toast.error("Account submission failed");
      }
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            You are subscribing to Mansa Capital Trading Signals
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Start earning 60%+ return to your portfolio with a single click of a
            button
          </p>
        </div>
        <div className="flex">
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="mb-4">
                <Label
                  htmlFor="billingCycle"
                  className={errors.billingCycle ? "text-red-500" : ""}
                >
                  Subscription type
                </Label>
                <select
                  id="billingCycle"
                  className={`w-full rounded-md border ${
                    errors.billingCycle ? "border-red-500" : "border-input"
                  } bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                  {...register("billingCycle", {
                    required: "Subscription type is required",
                  })}
                >
                  <option value="">Select a subscription type</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="yearly">Yearly</option>
                </select>
                {errors.billingCycle && (
                  <span className="text-xs text-red-500">
                    {errors.billingCycle.message}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <Label
                  htmlFor="pricePerMonth"
                  className={errors.pricePerMonth ? "text-red-500" : ""}
                >
                  Price per month
                </Label>
                <select
                  id="pricePerMonth"
                  className={`w-full rounded-md border ${
                    errors.pricePerMonth ? "border-red-500" : "border-input"
                  } bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                  {...register("pricePerMonth", {
                    required: "Price per month is required",
                  })}
                >
                  <option value="">Select a price</option>
                  <option value="100">USD 100</option>
                  <option value="200">USD 200</option>
                  <option value="300">USD 300</option>
                </select>
                {errors.pricePerMonth && (
                  <span className="text-xs text-red-500">
                    {errors.pricePerMonth.message}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <Label
                  htmlFor="cardNumber"
                  className={errors.cardNumber ? "text-red-500" : ""}
                >
                  Card number
                </Label>
                <div className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200">
                  <CardNumberElement
                    id="cardNumber"
                    className="w-full"
                    onChange={handleCardNumberChange}
                  />
                </div>
                {cardErrors.cardNumber && (
                  <span className="text-xs text-red-500">
                    {cardErrors.cardNumber}
                  </span>
                )}
              </div>

              <div className="mb-4">
                <Label
                  htmlFor="expiryDate"
                  className={errors.cardExpiry ? "text-red-500" : ""}
                >
                  Expiration date
                </Label>
                <div className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200">
                  <CardExpiryElement
                    id="expiryDate"
                    className="w-full"
                    onChange={handleCardExpiryChange}
                  />
                </div>
                {cardErrors.cardExpiry && (
                  <span className="text-xs text-red-500">
                    {cardErrors.cardExpiry}
                  </span>
                )}
              </div>

              <div className="mb-4">
                <Label
                  htmlFor="cvc"
                  className={errors.cardCvc ? "text-red-500" : ""}
                >
                  CVC
                </Label>
                <div className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200">
                  <CardCvcElement
                    id="cvc"
                    className="w-full"
                    onChange={handleCardCvcChange}
                  />
                </div>
                {cardErrors.cardCvc && (
                  <span className="text-xs text-red-500">
                    {cardErrors.cardCvc}
                  </span>
                )}
              </div>

              {error && <div className="text-red-500 mb-4">{error}</div>}

              <div className="flex items-center justify-between">
                <Button
                  type="submit"
                  className="bg-blue-500 text-white rounded-md px-4 py-2"
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
          <div className="flex flex-col max-w-xl w-full p-4 rounded-lg text-white">
            <div className="h-1/5 flex justify-center items-center ">
              <img
                src="/images/satisfaction.jpg"
                className="w-24 "
                alt="Satisfaction"
              />
            </div>
            <div
              className=" bg-blue-500 bg-cover bg-center text-md text-white rounded-lg"
              style={{ backgroundImage: 'url("/images/stock.png")' }}
            >
              <p className="text-center my-5">Here's What You'll Get</p>
              <p className="my-5">
                - Live trading signal with auto trade <br />
                - 07 week training program on our Trading methodology <br />-
                Live community + Weekly Q & A Calls
              </p>
              <p className="my-5">USD [X] per month subscription fees</p>
              <img
                src="/images/satisfaction.jpg"
                className="max-h-32 max-w-24 my-5"
              />
            </div>
          </div>
        </div>
        <Guarantee />
      </div>
    </div>
  );
};

const Guarantee = () => {
  return (
    <div className="flex flex-row justify-between w-full my-16">
      <Box key_={"Money Back Guarantee"} />
      <Box key_={"Privacy Guaranteed"} />
      <Box key_={"100% Satisfaction Guarantee"} />
    </div>
  );
};

const Box = ({ key_ }) => {
  return (
    <div className="flex flex-col w-1/6 px-3 rounded-lg text-center py-10 bg-muted">
      <p>{key_}</p>
    </div>
  );
};

export default CheckoutForm;
