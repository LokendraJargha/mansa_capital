"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const Accounts = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activePasswordInput, setActivePasswordInput] = useState(false);
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
      // Handle form submission logic here
      console.log(data);
    } catch (error) {
      toast.error("Something went Wrong from Backend");
      console.log("Error Occured ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row p-4">
      <div className="flex w-full">
        <div className="flex w-2/5 m-4 text-lg">ACCOUNTS</div>
        <div className="flex w-3/5 m-4">
          <ul className="text-sm text-muted-foreground">
            <li className="m-4">Account[1]</li>
            <li className="m-4">Account[2]</li>
            <li className="m-4">Account[3]</li>
            <li className="m-4">Account[4]</li>
            <li className="m-4">Account[5]</li>
          </ul>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <Card className="w-full">
          <CardContent className="space-y-2 my-4 py-4">
            <div className="flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="accountno"
              >
                Account No:
              </Label>
              <div className="flex flex-col w-full">
                <Input
                  className=""
                  id="accountno"
                  {...register("accountno", {
                    required: "Account No is required",
                  })}
                />
                {errors.accountno && (
                  <span className="text-red-500">
                    {errors.accountno.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="password"
              >
                Password:
              </Label>
              <div className="flex flex-col w-full">
                <div
                  className={`flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                    activePasswordInput && "ring-2 ring-ring ring-offset-2"
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
                  {errors.password && (
                    <span className="text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="accounttype"
              >
                Account Type:
              </Label>
              <div className="flex flex-col w-full">
                <Input
                  id="accounttype"
                  {...register("accounttype", {
                    required: "Account Type is required",
                  })}
                />
                {errors.accounttype && (
                  <span className="text-red-500">
                    {errors.accounttype.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="leverage"
              >
                Leverage:
              </Label>
              <div className="flex flex-col w-full">
                <Input
                  id="leverage"
                  {...register("leverage", {
                    required: "Leverage is required",
                  })}
                />
                {errors.leverage && (
                  <span className="text-red-500">
                    {errors.leverage.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="entryMethod"
              >
                Trade Entry Method:
              </Label>
              <div className="flex flex-col w-full">
                <select
                  id="entryMethod"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...register("entryMethod", {
                    required: "Trade Entry Method is required",
                  })}
                >
                  <option value="">Select an entry method</option>
                  <option value="manual">Manual</option>
                  <option value="auto">Auto</option>
                </select>
                {errors.entryMethod && (
                  <span className="text-red-500">
                    {errors.entryMethod.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="tradeSize"
              >
                Trade Size:
              </Label>

              <div className="flex flex-col w-full">
                <Input
                  className="w-full"
                  id="tradeSize"
                  {...register("tradeSize", {
                    required: "Trade Size is required",
                  })}
                />
                {errors.tradeSize && (
                  <span className="text-red-500">
                    {errors.tradeSize.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="signalDelivery"
              >
                Signal Delivery Over:
              </Label>
              <div className="flex flex-col w-full">
                <div className="flex items-center">
                  <Checkbox id="app" {...register("signalDelivery")} />
                  <Label
                    htmlFor="app"
                    className="text-sm font-medium leading-none ml-2"
                  >
                    App
                  </Label>
                </div>
                <div className="flex items-center mt-2">
                  <Checkbox id="email" {...register("signalDelivery")} />
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium leading-none ml-2"
                  >
                    Email
                  </Label>
                </div>
                <div className="flex items-center mt-2">
                  <Checkbox id="sms" {...register("signalDelivery")} />
                  <Label
                    htmlFor="sms"
                    className="text-sm font-medium leading-none ml-2"
                  >
                    SMS
                  </Label>
                </div>
                <div className="flex items-center mt-2">
                  <Checkbox id="discord" {...register("signalDelivery")} />
                  <Label
                    htmlFor="discord"
                    className="text-sm font-medium leading-none ml-2"
                  >
                    Discord
                  </Label>
                </div>
                <div className="flex items-center mt-2">
                  <Checkbox id="telegram" {...register("signalDelivery")} />
                  <Label
                    htmlFor="telegram"
                    className="text-sm font-medium leading-none ml-2"
                  >
                    Telegram
                  </Label>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="tradingStyle"
              >
                Trading Style:
              </Label>
              <div className="flex flex-col w-full">
                <select
                  id="tradingStyle"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                  <span className="text-red-500">
                    {errors.tradingStyle.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <Label
                className="w-1/3 text-sm text-muted-foreground text-right mr-4"
                htmlFor="csv"
              >
                CSV:
              </Label>
              <div className="flex flex-col w-full">
                <Input
                  className="w-full"
                  id="csv"
                  type="file"
                  {...register("csv", { required: "CSV file is required" })}
                />
                {errors.csv && (
                  <span className="text-red-500">{errors.csv.message}</span>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="flex justify-between" type="submit">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Accounts;
