"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function ResetPassword() {
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [activePasswordInput, setActivePasswordInput] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onEmailSubmit = async (data) => {
    try {
      console.log("Form data:", data); // Log the form data
      const res = await fetch("/api/resetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("Response:", res); // Log the response
      if (res.ok) {
        toast("User account found");
      } else {
        toast.error("User account not found");
      }
    } catch (error) {
      toast.error("Something went wrong from Backend");
      console.log("Error occurred ", error);
    }
  };
  return (
    <div
      className="absolute z-index[-1] w-[300%] h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 top-0 left-[-100%] transition-all duration-400"
      style={{ backgroundImage: 'url("/images/auth.jpg")' }}
    >
      <Card className="flex flex-col justify-center w-full max-w-md border rounded-lg ring-gray-200 px-2 mx-2 bg-white">
        <CardHeader>
          <CardTitle>token check</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit(onEmailSubmit)}>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="code">RESET CODE</Label>
              <Input
                id="code"
                type="text"
                {...register("te", {
                  required: "Reset code is required",
                  pattern: {
                    message: "Invalid Reset Code",
                  },
                })}
                className={errors.code ? "border-red-500" : "border-input"}
              />
              {errors.code && (
                <span className="text-red-500 text-xs">
                  {errors.code.message}
                </span>
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">PASSWORD</Label>
              <div
                className={`flex h-10 w-full rounded-md border ${
                  errors.password ? "border-red-500" : "border-input"
                } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                  activePasswordInput && "ring-2 ring-ring ring-offset-2"
                }`}
              >
                <input
                  id="password"
                  name="password"
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
          </CardContent>
          <CardFooter>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
