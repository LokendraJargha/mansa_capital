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
  const [emailForReset, setEmailForReset] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activePasswordInput, setActivePasswordInput] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onEmailSubmit = async (data) => {
    try {
      console.log("Form data:", data); // Log the form data
      const res = await fetch("/api/forgotpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("Response:", res); // Log the response
      if (res.ok) {
        setEmailForReset(data.email);
        toast("User account found");
      } else {
        toast.error("User account not found");
      }
    } catch (error) {
      toast.error("Something went wrong from Backend");
      console.log("Error occurred ", error);
    }
  };

  const handlePasswordReset = async (data) => {
    console.log("hellooooooo");
    if (data.password !== data.confirmPassword) {
      toast.warning("Passwords do not match");
      return;
    }

    if (!data.token) {
      toast.error("Token is required");
      return;
    }
    console.log("hello");
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
        toast("Password Changed successfully");
        await router.push("/auth/login");
      } else {
        toast.error("Password couldn't be changed");
      }
    } catch (error) {
      toast.error("Something went wrong from Backend");
      console.log("Error occurred ", error);
    }
  };

  return (
    <div className="flex flex-row m-3 px-3 py-6  rounded-lg  bg-white">
      <div className="flex w-1/2 ring-2 border rounded-sm ring-gray-200 p-4 m-4">
        <img src="/images/Designer.png" />
      </div>
      <Card className="w-1/2 ring-2 border rounded-sm ring-gray-200 p-4 m-4">
        <CardHeader>
          <CardTitle>Sign In to Your Account</CardTitle>
        </CardHeader>
        {emailForReset ? (
          <form onSubmit={handleSubmit(handlePasswordReset)}>
            <CardContent className="space-y-2">
              <input
                type="hidden"
                value={emailForReset}
                {...register("email")}
              />
              <div className="space-y-1">
                <Label htmlFor="token">Token</Label>
                <Input
                  id="token"
                  name="token"
                  type="text"
                  {...register("token", {
                    required: "Token is required",
                    pattern: {
                      message: "Invalid token",
                    },
                  })}
                  className={`${
                    errors.token ? "border-red-500" : "border-input"
                  }`}
                />
                {errors.token && (
                  <span className="text-xs text-red-500">
                    {errors.token.message}
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">PASSWORD</Label>
                <div
                  className={`flex h-10 w-full rounded-md border ${
                    errors.password ? "border-red-500" : "border-input"
                  } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                    showPassword && "ring-2 ring-ring ring-offset-2"
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
                  <span className="text-red-500 text-xs">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirmPassword">CONFIRM PASSWORD</Label>
                <div
                  className={`flex h-10 w-full rounded-md border ${
                    errors.confirmPassword ? "border-red-500" : "border-input"
                  } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                    showConfirmPassword && "ring-2 ring-ring ring-offset-2"
                  }`}
                >
                  <input
                    id="confirmPassword"
                    className="border-none outline-none w-full"
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: "Confirm password is required",
                    })}
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Submit</Button>
            </CardFooter>
          </form>
        ) : (
          <form onSubmit={handleSubmit(onEmailSubmit)}>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">REGISTERED EMAIL</Label>
                <Input
                  id="email"
                  name="email"
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
                  <span className="text-xs text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Submit</Button>
            </CardFooter>
          </form>
        )}
      </Card>
    </div>
  );
}
