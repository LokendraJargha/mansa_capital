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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import useAuthStore from "../../../config/userStore";

export default function ChangePassword() {
  const { loggedInUserData } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const router = useRouter();
  const [activePasswordInput, setActivePasswordInput] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const toggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };

  const onSubmit = async (data) => {
    //setIsDialogOpen(true);
    try {
      console.log("Form data:", data); // Log the form data
      const res = await fetch("/api/changepassword", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.mansa_capital_token}`,
        },
        body: JSON.stringify(data),
      });
      console.log("Response:", res); // Log the response
      if (res.ok) {
        toast("Password Changed successfully");
        reset(); // Reset the form after successful submission
      } else {
        toast.error("Account submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong from Backend");
      console.log("Error occurred ", error);
    }
  };
  return (
    <div className="p-0">
      <Card className="max-w-full p-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4 px-4">
            <div className="flex flex-row mt-4">
              <Label
                className="w-2/5 text-sm text-muted-foreground mr-4"
                htmlFor="oldPassword"
              >
                Old Password:
              </Label>
              <div className="flex flex-col w-full">
                <div
                  className={`flex h-10 rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                    activePasswordInput ? "ring-2 ring-ring ring-offset-2" : ""
                  } ${errors.oldPassword ? "border-red-500" : ""}`}
                >
                  <input
                    id="oldPassword"
                    className="border-none outline-none w-full"
                    type={showOldPassword ? "text" : "password"}
                    {...register("oldPassword", {
                      required: "Old Password is required",
                    })}
                  />
                  <button type="button" onClick={toggleOldPasswordVisibility}>
                    {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.oldPassword && (
                  <span className="text-xs text-red-500">
                    {errors.oldPassword.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <Label
                className="w-2/5 text-sm text-muted-foreground mr-4"
                htmlFor="password"
              >
                New Password:
              </Label>
              <div className="flex flex-col w-full">
                <div
                  className={`flex h-10 rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                    activePasswordInput ? "ring-2 ring-ring ring-offset-2" : ""
                  } ${errors.password ? "border-red-500" : ""}`}
                >
                  <input
                    id="password"
                    className="border-none outline-none w-full"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "New Password is required",
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
            </div>
            <div className="flex flex-row">
              <Label
                className="w-2/5 text-sm text-muted-foreground mr-4"
                htmlFor="confirmPassword"
              >
                Confirm Password:
              </Label>
              <div className="flex flex-col w-full">
                <div
                  className={`flex h-10 rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                    activePasswordInput ? "ring-2 ring-ring ring-offset-2" : ""
                  } ${errors.confirmPassword ? "border-red-500" : ""}`}
                >
                  <input
                    id="confirmPassword"
                    className="border-none outline-none w-full"
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
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
                  <span className="text-xs text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>
            <input
              type="hidden"
              value={
                loggedInUserData
                  ? loggedInUserData.email
                  : "thomasanres@gmail.com"
              }
              {...register("email")}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="px-16">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription>
              Are you sure you want to change the password?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-around">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Yes
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                No
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
