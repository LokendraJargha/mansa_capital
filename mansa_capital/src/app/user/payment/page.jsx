"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import CreditCardInput from "@/components/ui/creditcard";
import Footer from "@/components/ui/footer";

export default function Payment() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await router.push("/user/payment/congralutions");
    } catch (error) {
      toast.error("Something went Wrong from Backend");
      console.log("Error Occurred ", error);
    }
  };

  return (
    <div className="m-4 p-4">
      <div>
        <div>
          <div>
            <div className="text-2xl font-bold">
              You are subscribing to Mansa Capital Trading Signals
            </div>
            <div>
              Start earning 60%+ return to your portfolio with a single click of
              button
            </div>
          </div>
          <div className="flex flex-col">
            <PaymentForm
              onSubmit={handleSubmit(onSubmit)}
              errors={errors}
              register={register}
            />
            <Guarantee />
          </div>
        </div>
      </div>
    </div>
  );
}

const PaymentForm = ({ onSubmit, errors, register }) => {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/2">
        <Card>
          <CardHeader></CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label
                className="text-muted-foreground mr-4"
                htmlFor="pricePerMonth"
              >
                PRICE PER MONTH
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
                <option value="usd100">USD 100</option>
                <option value="usd200">USD 200</option>
              </select>
              {errors.pricePerMonth && (
                <span className="text-xs text-red-500">
                  {errors.pricePerMonth.message}
                </span>
              )}
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground mr-4" htmlFor="firstName">
                FIRST NAME
              </Label>
              <Input
                className={`flex w-full outline-none ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                id="firstName"
                type="text"
                {...register("firstName", {
                  required: "First name is required",
                  pattern: {
                    value: /^[A-Z]+$/i,
                    message: "Invalid first name",
                  },
                })}
              />
              {errors.firstName && (
                <span className="text-red-500 text-xs">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground mr-4" htmlFor="lastName">
                LAST NAME
              </Label>
              <Input
                id="lastName"
                type="text"
                className={`flex w-full outline-none ${
                  errors.lastName ? "border-red-500" : ""
                }`}
                {...register("lastName", {
                  required: "Last name is required",
                  pattern: {
                    value: /^[A-Z]+$/i,
                    message: "Invalid last name",
                  },
                })}
              />
              {errors.lastName && (
                <span className="text-red-500 text-xs">
                  {errors.lastName.message}
                </span>
              )}
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground mr-4" htmlFor="email">
                EMAIL
              </Label>
              <Input
                id="email"
                type="email"
                className={`flex w-full outline-none ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="space-y-1">
              <Label
                className="text-muted-foreground mr-4"
                htmlFor="creditCardNumber"
              >
                CREDIT CARD NUMBER
              </Label>
              <CreditCardInput
                className={`flex w-full outline-none ${
                  errors.creditCardNumber ? "border-red-500" : ""
                }`}
                {...register("creditCardNumber", {
                  required: "Credit Card Number is required",
                })}
              />
              {errors.creditCardNumber && (
                <span className="text-red-500 text-xs">
                  {errors.creditCardNumber.message}
                </span>
              )}
            </div>
            <div className="space-y-1">
              <Label
                className="text-muted-foreground mr-4"
                htmlFor="expiryDate"
              >
                EXPIRY DATE
              </Label>
              <Input
                className={`flex w-full outline-none ${
                  errors.expiryDate ? "border-red-500" : ""
                }`}
                id="expirydate"
                type="date"
                {...register("expiryDate", {
                  required: "Expiry Date is required",
                })}
              />
              {errors.expiryDate && (
                <span className="text-red-500 text-xs">
                  {errors.expiryDate.message}
                </span>
              )}
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground mr-4" htmlFor="cvc">
                CVC
              </Label>
              <Input
                className={`flex w-full outline-none ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                id="cvc"
                type="number"
                {...register("cvc", { required: "CVC is required" })}
              />
              {errors.cvc && (
                <span className="text-red-500 text-xs">
                  {errors.cvc.message}
                </span>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full p-6" type="submit" onClick={onSubmit}>
              SUBSCRIBE
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="flex flex-col w-1/2 m-4 p-4">
        <div className="h-1/5 w-full flex justify-center items-center">
          <img
            src="/images/satisfaction.jpg"
            className="max-h-full max-w-full"
          />
        </div>
        <div
          className="h-3/5 bg-blue-500 bg-cover bg-center text-2xl text-white"
          style={{ backgroundImage: 'url("/images/stock.png")' }}
        >
          <p className="text-center my-5">Here's What You'll Get</p>
          <p className="my-5">
            - Live trading signal with auto trade <br />
            - 07 week training program on our Trading methodology <br />- Live
            community + Weekly Q & A Calls
          </p>
          <p className="my-5">USD [X] per month subscription fees</p>
          <img
            src="/images/satisfaction.jpg"
            className="max-h-32 max-w-32 my-5"
          />
        </div>
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
    <div className="flex flex-col w-1/6 px-3 text-center py-16 bg-muted">
      <p>{key_}</p>
    </div>
  );
};
