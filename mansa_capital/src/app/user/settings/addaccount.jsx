"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import useAuthStore from "../../../../config/userStore";

const AddAccount = ({ onAddAccount }) => {
  const { loggedInUserData } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      console.log("Form data:", data); // Log the form data
      const res = await fetch("/api/account", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.mansa_capital_token}`,
        },
        body: JSON.stringify(data),
      });
      console.log("Response:", res); // Log the response
      if (res.ok) {
        toast("Account created successfully");
        reset(); // Reset the form after successful submission
        window.location.reload(); // Reload the page
      } else {
        toast.error("Account submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong from Backend");
      console.log("Error occurred ", error);
    }
  };

  return (
    <div className="flex w-full">
      <Card className="flex flex-col max-w-full w-full bg-yellow-50 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="hidden"
            value={
              loggedInUserData
                ? loggedInUserData.email
                : "thomasanres@gmail.com"
            }
            {...register("createdBy")}
          />
          <CardContent className="space-y-2 my-4 py-4">
            <div className="flex flex-row w-full">
              <Label
                className={`w-2/5 text-sm text-muted-foreground text-right mr-4 ${
                  errors.accountno ? "text-red-500" : ""
                }`}
                htmlFor="accountno"
              >
                Account No:
              </Label>
              <div className="flex flex-col w-full">
                <Input
                  className={`${errors.accountno ? "border-red-500" : ""}`}
                  id="accountno"
                  {...register("accountno", {
                    required: "Account No is required",
                  })}
                />
                {errors.accountno && (
                  <span className="text-xs text-red-500">
                    {errors.accountno.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <Label
                className={`w-2/5 text-sm text-muted-foreground text-right mr-4 ${
                  errors.password ? "text-red-500" : ""
                }`}
                htmlFor="password"
              >
                Password:
              </Label>
              <div className="flex flex-col w-full">
                <div
                  className={`flex h-10 rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                >
                  <input
                    id="password"
                    className="border-none outline-none w-full"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  <button type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-xs text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <Label
                className={`w-2/5 text-sm text-muted-foreground text-right mr-4 ${
                  errors.accounttype ? "text-red-500" : ""
                }`}
                htmlFor="accounttype"
              >
                Account Type:
              </Label>
              <div className="flex flex-col w-full">
                <Input
                  id="accounttype"
                  className={`${errors.accounttype ? "border-red-500" : ""}`}
                  {...register("accounttype", {
                    required: "Account Type is required",
                  })}
                />
                {errors.accounttype && (
                  <span className="text-xs text-red-500">
                    {errors.accounttype.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <Label
                className={`w-2/5 text-sm text-muted-foreground text-right mr-4 ${
                  errors.leverage ? "text-red-500" : ""
                }`}
                htmlFor="leverage"
              >
                Leverage:
              </Label>
              <div className="flex flex-col w-full">
                <Input
                  id="leverage"
                  className={`${errors.leverage ? "border-red-500" : ""}`}
                  {...register("leverage", {
                    required: "Leverage is required",
                  })}
                />
                {errors.leverage && (
                  <span className="text-xs text-red-500">
                    {errors.leverage.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <Label
                className={`w-2/5 text-sm text-muted-foreground text-right mr-4 ${
                  errors.entryMethod ? "text-red-500" : ""
                }`}
                htmlFor="entryMethod"
              >
                Trade Entry Method:
              </Label>
              <div className="flex flex-col w-full">
                <select
                  id="entryMethod"
                  className={`w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                    errors.entryMethod ? "border-red-500" : ""
                  }`}
                  {...register("entryMethod", {
                    required: "Trade Entry Method is required",
                  })}
                >
                  <option value="">Select an entry method</option>
                  <option value="manual">Manual</option>
                  <option value="auto">Auto</option>
                </select>
                {errors.entryMethod && (
                  <span className="text-xs text-red-500">
                    {errors.entryMethod.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <Label
                className={`w-2/5 text-sm text-muted-foreground text-right mr-4 ${
                  errors.tradeSize ? "text-red-500" : ""
                }`}
                htmlFor="tradeSize"
              >
                Trade Size:
              </Label>
              <div className="flex flex-col w-full">
                <Input
                  id="tradeSize"
                  className={`${errors.tradeSize ? "border-red-500" : ""}`}
                  {...register("tradeSize", {
                    required: "Trade Size is required",
                  })}
                />
                {errors.tradeSize && (
                  <span className="text-xs text-red-500">
                    {errors.tradeSize.message}
                  </span>
                )}
              </div>
            </div>
            {/* <div className="flex flex-row">
              <Label
                className="w-2/5 text-sm text-muted-foreground text-right mr-4"
                htmlFor="signalDelivery"
              >
                Signal Delivery Over Email:
              </Label>
              <div className="flex flex-col w-full">
                <div className="flex items-center">
                  <Checkbox id="app" {...register("app")} />

                  <Label
                    htmlFor="app"
                    className="text-sm font-medium leading-none ml-2"
                  >
                    App
                  </Label>
                </div>
                <div className="flex items-center mt-2">
                  <Checkbox id="email" {...register("email")} />
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium leading-none ml-2"
                  >
                    Email
                  </Label>
                </div>
                <div className="flex items-center mt-2">
                  <Checkbox id="sms" {...register("sms")} />
                  <Label
                    htmlFor="sms"
                    className="text-sm font-medium leading-none ml-2"
                  >
                    SMS
                  </Label>
                </div>
                <div className="flex items-center mt-2">
                  <Checkbox id="discord" {...register("discord")} />
                  <Label
                    htmlFor="discord"
                    className="text-sm font-medium leading-none ml-2"
                  >
                    Discords
                  </Label>
                </div>
                <div className="flex items-center mt-2">
                  <Checkbox id="telegram" {...register("telegram")} />
                  <Label
                    htmlFor="telegram"
                    className="text-sm font-medium leading-none ml-2"
                  >
                    Telegram
                  </Label>
                </div>
              </div>
            </div> */}
            <div className="flex flex-row">
              <Label
                className={`w-2/5 text-sm text-muted-foreground text-right mr-4 ${
                  errors.tradingStyle ? "text-red-500" : ""
                }`}
                htmlFor="tradingStyle"
              >
                Trading Style:
              </Label>
              <div className="flex flex-col w-full">
                <select
                  id="tradingStyle"
                  className={`w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                    errors.tradingStyle ? "border-red-500" : ""
                  }`}
                  {...register("tradingStyle", {
                    required: "Trading style is required",
                  })}
                >
                  <option value="">Select a Style</option>
                  <option value="day">Day</option>
                  <option value="swing">Swing</option>
                  <option value="investor">Investor</option>
                </select>
                {errors.tradingStyle && (
                  <span className="text-xs text-red-500">
                    {errors.tradingStyle.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <Label
                className={`w-2/5 text-sm text-muted-foreground text-right mr-4 ${
                  errors.csv ? "text-red-500" : ""
                }`}
                htmlFor="csv"
              >
                CSV:
              </Label>
              <div className="flex flex-col w-full">
                <Input
                  className={`w-full ${errors.csv ? "border-red-500" : ""}`}
                  id="csv"
                  {...register("csv", { required: "CSV file is required" })}
                />
                {errors.csv && (
                  <span className="text-xs text-red-500">
                    {errors.csv.message}
                  </span>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="px-16" type="submit">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default AddAccount;
