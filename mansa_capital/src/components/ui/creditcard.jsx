"use client";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

function CreditCardInput() {
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const { watch, setValue } = useFormContext(); // Ensure you destructure correctly

  const handleChange = (event) => {
    let value = event.target.value;
    // Remove any non-numeric characters
    value = value.replace(/\D/g, "");
    // Add hyphens after every fourth character
    value = value.replace(/(\d{4})/g, "$1-");
    // Remove any trailing hyphens
    value = value.replace(/-$/, "");

    // Limit to exactly 19 characters (16 digits + 3 dashes)
    if (value.length <= 19) {
      setCreditCardNumber(value);
      setValue("creditCardNumber", value, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  };

  // Watch for changes to the credit card number in the parent form
  const watchedCreditCardNumber = watch("creditCardNumber", "");

  return (
    <div>
      <input
        id="creditCardNumber"
        type="text"
        value={creditCardNumber || watchedCreditCardNumber}
        onChange={handleChange}
        maxLength={19} // Maximum 16 digits + 3 dashes
        className="flex text-right h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Enter your credit card number"
      />
    </div>
  );
}

export default CreditCardInput;
