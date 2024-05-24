"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Privacy = () => {
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
    } catch (error) {
      toast.error("Something went Wrong from Backend");
      console.log("Error Occured ", error);
    }
    // Handle form submission logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-row w-1/2 p-4">
      <div className="flex w-2/5 m-4 mr-10 text-lg">PRIVACY</div>
      <div className="flex w-3/5">
        <Card className="w-full">
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-2">
              <div className="flex flex-row mt-4">
                <Label
                  className="w-1/3 text-sm text-muted-foreground mr-4"
                  htmlFor="email"
                >
                  Email:
                </Label>
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
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div className="flex flex-row">
                <Label
                  className="w-1/3 text-sm text-muted-foreground mr-4"
                  htmlFor="password"
                >
                  Password:
                </Label>
                <div
                  className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
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
              <div className="flex flex-row">
                <Label
                  className="w-1/3 text-sm text-muted-foreground mr-4"
                  htmlFor="phone"
                >
                  Phone:
                </Label>
                <Input className="" id="phone" type="number" />
              </div>
            </CardContent>

            <CardFooter>
              <Button type="submit">LOGIN</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
