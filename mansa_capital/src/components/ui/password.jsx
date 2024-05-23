"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput({ ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const [activePasswordInput, setActivePasswordInput] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
        activePasswordInput && "ring-2 ring-ring ring-offset-2"
      }`}
    >
      <input
        {...props}
        onFocus={() => setActivePasswordInput(true)}
        onBlur={() => setActivePasswordInput(false)}
        className="border-none outline-none w-full"
        type={showPassword ? "text" : "password"}
        required="true"
      />
      <button type="button" onClick={togglePasswordVisibility}>
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}
