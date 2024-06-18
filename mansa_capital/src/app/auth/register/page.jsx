"use client";
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
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
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
    watch,
  } = useForm();

  const terms = watch("terms");

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        await router.push("/auth/payment");
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      toast.error("Something went wrong from Backend");
      console.log("Error occurred ", error);
    }
  };

  const password = watch("password");

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/auth.jpg")' }}
      ></div>
      <div className="flex justify-center items-center absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-400 to-purple-500 opacity-70"></div>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="flex flex-col justify-center w-full max-w-xl border rounded-lg ring-gray-200 px-2 mx-2 bg-white bg-opacity-100 backdrop-blur-lg">
          <CardHeader>
            <CardTitle>Create Your New Account</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <div className="flex  space-x-4 w-full">
                <div className="space-y-1 w-1/2">
                  <Label
                    htmlFor="firstName"
                    className={errors.firstName ? "text-red-500" : ""}
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    {...register("firstName", {
                      required: "First name is required",
                      pattern: {
                        value: /^[A-Z]+$/i,
                        message: "Invalid first name",
                      },
                    })}
                    className={
                      errors.firstName ? "border-red-500" : "border-input"
                    }
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-xs">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div className="space-y-1 w-1/2">
                  <Label
                    htmlFor="lastName"
                    className={errors.lastName ? "text-red-500" : ""}
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    {...register("lastName", {
                      required: "Last name is required",
                      pattern: {
                        value: /^[A-Z]+$/i,
                        message: "Invalid last name",
                      },
                    })}
                    className={
                      errors.lastName ? "border-red-500" : "border-input"
                    }
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-xs">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <Label
                  htmlFor="email"
                  className={errors.email ? "text-red-500" : ""}
                >
                  Email
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
                  className={errors.email ? "border-red-500" : "border-input"}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex w-full space-x-4">
                <div className="space-y-1 w-1/2">
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
                <div className="space-y-1 w-1/2">
                  <Label
                    htmlFor="confirmPassword"
                    className={errors.confirmPassword ? "text-red-500" : ""}
                  >
                    Confirm Password
                  </Label>
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
                        validate: (value) =>
                          value === password || "Passwords do not match",
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
              </div>
              <div className="flex items-center py-2 space-x-2">
                <input
                  id="terms"
                  type="checkbox"
                  {...register("terms", {
                    required: "You must agree to the terms",
                  })}
                  onClick={(e) => setIsTermsChecked(e.target.checked)}
                />
                <label
                  htmlFor="terms"
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  dangerouslySetInnerHTML={{
                    __html:
                      'By signing up, I agree to the <a href="/privacy-policy" class="underline hover:text-blue-500">Privacy Policy</a> and the <a href="/terms-of-service" class="underline hover:text-blue-500">Terms of Service</a>.',
                  }}
                ></label>
              </div>
              {errors.terms && (
                <span className="text-red-500 text-xs mx-2">
                  {errors.terms.message}
                </span>
              )}
            </CardContent>

            <CardFooter>
              <Button
                disabled={!isTermsChecked}
                type="submit"
                className="px-16"
              >
                REGISTER
              </Button>
            </CardFooter>
          </form>
          <div className="text-sm justify-center text-center text-muted-foreground mx-10 mb-2">
            <p>
              Have an account?{" "}
              <a href="/auth/login" className="hover:underline text-blue-500">
                Sign In
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
