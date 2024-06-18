"use client";
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ChangePassword from "@/components/ui/changepassword";

const Privacy = () => {
  const [activeTab, setActiveTab] = useState("privacy");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [activePasswordInput, setActivePasswordInput] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await router.push("/user/settings");
      setIsDialogOpen(true);
    } catch (error) {
      toast.error("Something went Wrong from Backend");
      console.log("Error Occurred ", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-row w-2/3 p-4">
      <div className="flex w-1/4 m-4 mr-10 text-lg">PRIVACY</div>
      <div className="flex w-3/4 flex-col">
        <div className="flex justify-start mb-4">
          <button
            className={`px-4 py-2 rounded-l-md ${
              activeTab === "privacy"
                ? "bg-[#174894] text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("privacy")}
          >
            Privacy
          </button>
          <button
            className={`px-4 py-2 rounded-r-md ${
              activeTab === "changePassword"
                ? "bg-[#174894] text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("changePassword")}
          >
            Change Password
          </button>
        </div>
        <div className="px-0">
          {activeTab === "privacy" && (
            <Card className="max-w-full p-0 ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="space-y-4 px-4">
                  <div className="flex flex-row mt-4">
                    <Label
                      className="w-2/5 text-sm text-muted-foreground mr-4"
                      htmlFor="email"
                    >
                      Email:
                    </Label>
                    <div className="flex flex-col w-full">
                      <Input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className={`${
                          errors.email ? "border-red-500" : "border-input"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <Label
                      className="w-2/5 text-sm text-muted-foreground mr-4"
                      htmlFor="password"
                    >
                      Password:
                    </Label>
                    <div className="flex flex-col w-full">
                      <div
                        className={`flex h-10 rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                          activePasswordInput
                            ? "ring-2 ring-ring ring-offset-2"
                            : ""
                        } ${errors.password ? "border-red-500" : ""}`}
                      >
                        <input
                          id="password"
                          className="border-none outline-none w-full"
                          type={showPassword ? "text" : "password"}
                          {...register("password", {
                            required: "Password is required",
                          })}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
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
                      className="w-2/5 text-sm text-muted-foreground mr-4"
                      htmlFor="phone"
                    >
                      Phone:
                    </Label>

                    <div className="flex flex-col w-full">
                      <Input
                        id="phone"
                        className={`${errors.phone ? "border-red-500" : ""}`}
                        {...register("phone", {
                          required: "Phone Number is required",
                        })}
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-500">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </form>
            </Card>
          )}
          {activeTab === "changePassword" && <ChangePassword />}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
