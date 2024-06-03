"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { signIn } from "../../../../auth";
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

export default function Login_Page() {
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

  return (
    <div className="flex flex-row m-3 px-3 py-6 rounded-lg  bg-white">
      <div className="flex w-1/2 ring-2 border rounded-sm ring-gray-200 p-4 m-4">
        <img src="/images/Designer.png" />
      </div>
      <Card className="w-1/2 ring-2 border rounded-sm ring-gray-200 p-4 m-4">
        <CardHeader>
          <CardTitle>Sign In to Your Account</CardTitle>
        </CardHeader>
        <form
          action={async (formData) => {
            "use server";
            console.log(formData);
            await signIn("credentials", formData);
          }}
        >
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
          <div className="flex items-center px-6 pb-3 space-x-2">
            <Checkbox id="remember" {...register("remember")} />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          <CardFooter>
            <Button type="submit">LOGIN</Button>
          </CardFooter>
        </form>
        <div className="text-sm text-muted-foreground mx-6">
          <p>
            Forgot password?{" "}
            <a href="/auth/reset-password" className="hover:underline">
              Send Link
            </a>
          </p>
          <p>
            Don't have an account?{" "}
            <a href="/auth/register" className="hover:underline">
              Sign Up
            </a>
          </p>
          <p>
            Did not receive confirmation instruction?{" "}
            <a href="/auth/resend-confirmation" className="hover:underline">
              Resend Email
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
}
