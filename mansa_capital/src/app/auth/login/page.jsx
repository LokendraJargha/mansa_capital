"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthStore from "../../../../config/userStore";
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
  const { setLoggedInUserData, setToken } = useAuthStore();
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
  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const data = await res.json();
        setToken(data.token);
        setLoggedInUserData(data.user);
        router.push("/user/review/actions");
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      toast.error("Something went wrong from Backend");
      console.log("Error occurred ", error);
    }
  };

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/auth.jpg")' }}
      ></div>
      <div className="flex justify-center items-center absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-400 to-purple-500 opacity-70"></div>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="flex flex-col justify-center w-full max-w-sm border rounded-lg ring-gray-200 px-2 mx-2 bg-white bg-opacity-100 backdrop-blur-lg">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label
                  htmlFor="email"
                  className={errors.email ? "text-red-500" : ""}
                >
                  Email
                </Label>
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
                <Label
                  htmlFor="password"
                  className={errors.password ? "text-red-500" : ""}
                >
                  Password
                </Label>
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
            <div className="lex items-center py-2 px-10 space-x-2">
              <Checkbox id="remember" {...register("remember")} />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <CardFooter>
              <Button
                type="submit"
                className="flex px-16 justify-center items-center"
              >
                LOGIN
              </Button>
            </CardFooter>
          </form>
          <div className="flex flex-col text-sm text-muted-foreground px-10 mb-2 justify-center items-center">
            <p className="mb-2">
              Forgot password?{" "}
              <a
                href="/auth/reset-password"
                className="hover:underline text-blue-500"
              >
                Send Link
              </a>
            </p>
            <p>
              Don't have an account?{" "}
              <a
                href="/auth/register"
                className="hover:underline text-blue-500"
              >
                Sign Up
              </a>
            </p>
            {/* <p>
              Did't receive confirmation code?{" "}
              <a
                href="/auth/resend-confirmation"
                className="hover:underline text-blue-500"
              >
                Resend Email
              </a>
            </p> */}
          </div>
        </Card>
      </div>
    </div>
  );
}
