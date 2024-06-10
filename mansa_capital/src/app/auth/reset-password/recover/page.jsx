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
    <div className="flex flex-row m-3 px-3 py-6  rounded-lg  bg-white">
      <div className="flex w-1/2 ring-2 border rounded-sm ring-gray-200 p-4 m-4">
        <img src="/images/Designer.png" />
      </div>
      <Card className="w-1/2 ring-2 border rounded-sm ring-gray-200 p-4 m-4">
        <CardHeader>
          <CardTitle>Sign In to Your Account</CardTitle>
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

<div>
// app/auth/reset-password/page.jsx
"use client";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Page() {
  const [emailForReset, setEmailForReset] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
      token: "",
    },
  });

  const watchedPassword = watch("newPassword");

  const handlePasswordReset = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.warning("Passwords do not match");
      return;
    }

    if (!data.token) {
      toast.error("Token is required");
      return;
    }

    try {
      const res = await fetch("/api/resetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // const response = await http.post("/auth/verify-token", {
      //   token: data.token,
      //   email: emailForReset,
      //   newPassword: data.newPassword,
      // });

      if (response.status === 201) {
        toast.error(response.data.message);
      } else if (response.status === 200) {
        toast.success("Password changed successfully");
        router.push("/auth/signin");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleForgotPassword = async (data) => {
    try {
      const res = await fetch("/api/resetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // const response = await http.post("/auth/resetpassword", data);

      if (response.status === 201) {
        toast.error(response.data.message);
      } else if (response.status === 200) {
        setEmailForReset(data.email);
        setValue("email", data.email, { shouldValidate: true });
        toast.success(response?.data?.message);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <>
      {emailForReset ? (
        <ResetPasswordForm
          errors={errors}
          register={register}
          handleSubmit={handleSubmit}
          handlePasswordReset={handlePasswordReset}
          watchedPassword={watchedPassword}
        />
      ) : (
        <ForgotPasswordForm
          errors={errors}
          register={register}
          handleSubmit={handleSubmit}
          handleForgotPassword={handleForgotPassword}
          isSubmitting={isSubmitting}
        />
      )}
    </>
  );
}

const ResetPasswordForm = ({
  errors,
  register,
  handleSubmit,
  handlePasswordReset,
  watchedPassword,
}) => (
  <div className="px-8 flex flex-col">
    <h1 className="text-center text-2xl font-semibold">Reset your password!</h1>

    <InputField
      label="Token"
      error={errors.token}
      register={register("token", { required: "Token is required" })}
    />

    <InputField
      label="New Password"
      type="password"
      error={errors.newPassword}
      register={register("newPassword", {
        required: "Please enter a new password",
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters long",
        },
        pattern: {
          value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
          message:
            "Password must contain at least one letter, one number, and one special character",
        },
      })}
    />

    <InputField
      label="Confirm New Password"
      type="password"
      error={errors.confirmPassword}
      register={register("confirmPassword", {
        required: "Please confirm your password",
        validate: (value) =>
          value === watchedPassword || "Passwords do not match",
      })}
    />

    <div className="flex flex-col mt-2">
      <Button
        className="bg-[#174894] hover:bg-[#173094]"
        onClick={handleSubmit(handlePasswordReset)}
        disabled={errors.newPassword || errors.confirmPassword}
      >
        Reset Password
      </Button>
    </div>
  </div>
);

const ForgotPasswordForm = ({
  errors,
  register,
  handleSubmit,
  handleForgotPassword,
  isSubmitting,
}) => (
  <div className="px-8">
    <h1 className="text-center text-2xl font-semibold">Forgot Password</h1>

    <InputField
      label="Email Address"
      type="email"
      error={errors.email}
      register={register("email", { required: "Email is required" })}
    />

    {isSubmitting ? (
      <Button
        type="submit"
        className="bg-[#174894] hover:bg-[#173094] disabled"
      >
        <Spinner />
      </Button>
    ) : (
      <Button
        type="submit"
        className="bg-[#174894] hover:bg-[#173094]"
        onClick={handleSubmit(handleForgotPassword)}
      >
        Forgot Password
      </Button>
    )}

    <div className="mt-3">
      <p className="mt-3 text-center text-xs">
        Go back to the{" "}
        <Link href="/auth/signin" className="text-blue-500">
          Sign in
        </Link>
      </p>
    </div>
  </div>
);

const InputField = ({ label, type = "text", error, register }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col my-2">
      <p className="my-1">{label}</p>
      <div
        className={`flex rounded-lg border-2 ${
          error ? "border-red-700" : "border-[#CCC]"
        } bg-[#E7E7E7] px-3 py-2`}
      >
        <input
          autoComplete="off"
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          className="w-full bg-transparent text-sm text-slate-600 outline-none"
          {...register}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="focus:outline-none"
          >
            {!showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
          </button>
        )}
      </div>
      {error && (
        <span role="alert" className="text-red-700 mx-2 text-[12px]">
          {error.message}
        </span>
      )}
    </div>
  );
};

const Spinner = () => (
  <svg
    aria-hidden="true"
    role="status"
    className="inline w-4 h-4 me-3 text-white animate-spin"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="#E5E7EB"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentColor"
    />
  </svg>
);

</div>