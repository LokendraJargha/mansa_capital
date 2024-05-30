"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewBacktest() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Handle form submission logic here
      console.log(data);
      await router.push("/user/plan/backtest");
    } catch (error) {
      toast.error("Something went Wrong from Backend");
      console.log("Error Occured ", error);
    }
  };

  return (
    <Card className="max-w-lg mx-auto mt-10 shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">
          Create a Backtesting Session
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-2">
          <div>
            <Label className="text-gray-600" htmlFor="accountBalance">
              ACCOUNT BALANCE
            </Label>
            <div
              className={`flex w-full gap-3 border rounded-md p-2 ${
                errors.accountBalance ? "border-red-500" : "border-gray-300"
              } focus-within:border-blue-500`}
            >
              <p>USD</p>
              <input
                className={`flex w-full outline-none ${
                  errors.accountBalance
                    ? "border-red-500"
                    : "border-transparent"
                }`}
                placeholder="0.00"
                {...register("accountBalance", {
                  required: "Account balance is required",
                  pattern: {
                    value: /^\d+(\.\d+)?$/,
                    message: "Account balance must be a number",
                  },
                })}
              />
            </div>
            {errors.accountBalance && (
              <span className="text-red-500 text-xs">
                {errors.accountBalance.message}
              </span>
            )}
          </div>
          <div>
            <Label className="text-gray-600" htmlFor="pairs">
              PAIRS
            </Label>
            <select
              id="pairs"
              className={`w-full rounded-md border ${
                errors.pairs ? "border-red-500" : "border-gray-300"
              } bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none`}
              {...register("pairs", { required: "Pair is required" })}
            >
              <option value="">Select a pair</option>
              <option value="eurusd">EUR USD</option>
              <option value="gbpusd">GBP USD</option>
              <option value="us500">US 500</option>
            </select>
            {errors.pairs && (
              <span className="text-red-500 text-xs">
                {errors.pairs.message}
              </span>
            )}
          </div>
          <div>
            <Label className="text-gray-600" htmlFor="startDate">
              START DATE
            </Label>
            <Input
              className={`w-full rounded-md border ${
                errors.startDate ? "border-red-500" : "border-gray-300"
              } px-3 py-2 text-sm focus:border-blue-500 focus:outline-none`}
              id="startDate"
              type="date"
              {...register("startDate", {
                required: "Start date is required",
                validate: (value) =>
                  value <= (document.getElementById("endDate")?.value || "") ||
                  "Start date cannot be after end date",
              })}
            />
            {errors.startDate && (
              <span className="text-red-500 text-xs">
                {errors.startDate.message}
              </span>
            )}
          </div>
          <div>
            <Label className="text-gray-600" htmlFor="endDate">
              END DATE
            </Label>
            <Input
              className={`w-full rounded-md border ${
                errors.endDate ? "border-red-500" : "border-gray-300"
              } px-3 py-2 text-sm focus:border-blue-500 focus:outline-none`}
              id="endDate"
              type="date"
              {...register("endDate", {
                required: "End date is required",
                validate: (value) =>
                  value >=
                    (document.getElementById("startDate")?.value || "") ||
                  "End date cannot be before start date",
              })}
            />
            {errors.endDate && (
              <span className="text-red-500 text-xs">
                {errors.endDate.message}
              </span>
            )}
          </div>
          <div>
            <Label className="text-gray-600" htmlFor="strategy">
              STRATEGY
            </Label>
            <Input
              className={`w-full rounded-md border ${
                errors.strategy ? "border-red-500" : "border-gray-300"
              } px-3 py-2 text-sm focus:border-blue-500 focus:outline-none`}
              id="strategy"
              type="text"
              {...register("strategy", {
                required: "Strategy is required",
              })}
            />
            {errors.strategy && (
              <span className="text-red-500 text-xs">
                {errors.strategy.message}
              </span>
            )}
          </div>
          <div>
            <Label className="text-gray-600" htmlFor="sessionName">
              NAME OF SESSION (optional)
            </Label>
            <Input
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              id="sessionName"
              type="text"
              {...register("sessionName", {})}
            />
            {errors.sessionName && (
              <span className="text-red-500 text-xs">
                {errors.sessionName.message}
              </span>
            )}
          </div>
          <div>
            <Label className="text-gray-600" htmlFor="description">
              DESCRIPTION (optional)
            </Label>
            <textarea
              className="w-full h-32 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              id="description"
              {...register("description")}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            SUBMIT
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
