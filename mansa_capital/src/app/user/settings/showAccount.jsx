"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import useAuthStore from "../../../../config/userStore";

const ShowAccount = ({ account, onEdit }) => {
  const { loggedInUserData } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    if (account) {
      setValue("accountno", account.account_number);
      setValue("password", account.password);
      setValue("accounttype", account.account_type);
      setValue("leverage", account.leverage);
      setValue("entryMethod", account.entry_method);
      setValue("tradeSize", account.trade_size);
      setValue("tradingStyle", account.trading_style);
      setValue("csv", account.csv);
    }
  }, [account, setValue]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdate = async (data) => {
    try {
      const res = await fetch(`/api/account/${account.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.mansa_capital_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast("Account updated successfully");
        setIsEditing(false);
        onEdit();
      } else {
        toast.error("Account update failed");
      }
    } catch (error) {
      toast.error("Something went wrong from Backend");
      console.log("Error occurred ", error);
    }
  };

  const onSubmit = (data) => {
    handleUpdate(data);
  };

  return (
    <div className="flex w-full">
      <Card className="flex max-w-full flex-col w-full bg-yellow-50 rounded-lg">
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
                className="w-2/5 text-sm text-muted-foreground text-right mr-4"
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
                  disabled={!isEditing}
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
                className="w-2/5 text-sm text-muted-foreground text-right mr-4"
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
                    disabled={!isEditing}
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
                className="w-2/5 text-sm text-muted-foreground text-right mr-4"
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
                  disabled={!isEditing}
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
                className="w-2/5 text-sm text-muted-foreground text-right mr-4"
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
                  disabled={!isEditing}
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
                className="w-2/5 text-sm text-muted-foreground text-right mr-4"
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
                  disabled={!isEditing}
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
                className="w-2/5 text-sm text-muted-foreground text-right mr-4"
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
                  disabled={!isEditing}
                />
                {errors.tradeSize && (
                  <span className="text-xs text-red-500">
                    {errors.tradeSize.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <Label
                className="w-2/5 text-sm text-muted-foreground text-right mr-4"
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
                  disabled={!isEditing}
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
                className="w-2/5 text-sm text-muted-foreground text-right mr-4"
                htmlFor="csv"
              >
                CSV:
              </Label>
              <div className="flex flex-col w-full">
                <Input
                  className={`w-full ${errors.csv ? "border-red-500" : ""}`}
                  id="csv"
                  {...register("csv", { required: "CSV file is required" })}
                  disabled={!isEditing}
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
            {!isEditing ? (
              <Button className="flex" type="button" onClick={handleEditClick}>
                Edit
              </Button>
            ) : (
              <Button className="flex" type="submit">
                Update
              </Button>
            )}
          </CardFooter>
        </form>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default ShowAccount;
