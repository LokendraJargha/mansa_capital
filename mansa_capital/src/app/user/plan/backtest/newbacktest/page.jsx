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
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>Create a Backtesting Session</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-2">
          <div className="space-y-1 mr-4 py-2 ">
            <Label
              className="text-muted-foreground mr-4"
              htmlFor="accountBalance"
            >
              ACCOUNT BALANCE
            </Label>
            <div className="flex gap-3 border p-2">
              <p>USD</p>
              <input
                type="number"
                className="outline-none"
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
              <span className="text-red-500">
                {errors.accountBalance.message}
              </span>
            )}
          </div>
          <div className="space-y-1 mr-4 py-2">
            <Label className="text-muted-foreground mr-4" htmlFor="pairs">
              PAIRS
            </Label>
            <select
              id="pairs"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              {...register("pairs", { required: "Pair is required" })}
            >
              <option value="">Select a pair</option>
              <option value="eurusd">EUR USD</option>
              <option value="gbpusd">GBP USD</option>
              <option value="us500">US 500</option>
            </select>
            {errors.pairs && (
              <span className="text-red-500">{errors.pairs.message}</span>
            )}
          </div>

          <div className="space-y-1 mr-4 py-2">
            <Label className="text-muted-foreground mr-4" htmlFor="startDate">
              START DATE
            </Label>
            <Input
              className="text-right"
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
              <span className="text-red-500">{errors.startDate.message}</span>
            )}
          </div>
          <div className="space-y-1 mr-4 py-2">
            <Label className="text-muted-foreground mr-4" htmlFor="endDate">
              END DATE
            </Label>
            <Input
              className="text-right"
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
              <span className="text-red-500">{errors.endDate.message}</span>
            )}
          </div>
          <div className="space-y-1 mr-4 py-2">
            <Label className="text-muted-foreground mr-4" htmlFor="sessionName">
              Name of Session
            </Label>
            <Input
              id="sessionName"
              type="text"
              {...register("sessionName", {
                required: "Session name is required",
              })}
            />
            {errors.sessionName && (
              <span className="text-red-500">{errors.sessionName.message}</span>
            )}
          </div>
          <div className="space-y-1 mr-4 py-2">
            <label className="text-muted-foreground mr-4" htmlFor="description">
              Description (optional)
            </label>
            <textarea
              className="w-full h-32 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="description"
              {...register("description")}
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit">SUBMIT</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
