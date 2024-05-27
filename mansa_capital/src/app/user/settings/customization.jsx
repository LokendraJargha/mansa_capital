"use client";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Customisation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-row p-4">
      <div className="flex w-1/5 m-4 text-lg">CUSTOMISATIONS</div>
      <div className="flex w-1/2 flex-col">
        <Card className="w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-2 my-4 py-4">
              <div className="flex flex-row">
                <Label
                  className="w-1/3 text-sm text-muted-foreground mr-4"
                  htmlFor="screenMode"
                >
                  Screen Mode:
                </Label>
                <div className="flex flex-col w-full">
                  <select
                    id="screenMode"
                    className={`w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                      errors.screenMode ? "border-red-500" : ""
                    }`}
                    {...register("screenMode", {
                      required: "Screen Mode is required",
                    })}
                  >
                    <option value="">Select a Screen mode</option>
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                  </select>
                  {errors.screenMode && (
                    <span className="text-red-500 text-xs">
                      {errors.screenMode.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-row">
                <Label
                  className="w-1/3 text-sm text-muted-foreground mr-4"
                  htmlFor="baseTimezone"
                >
                  Base Timezone:
                </Label>
                <div className="flex flex-col w-full">
                  <select
                    id="baseTimezone"
                    className={`w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                      errors.baseTimezone ? "border-red-500" : ""
                    }`}
                    {...register("baseTimezone", {
                      required: "Base Timezone is required",
                    })}
                  >
                    <option value="">Select a Timezone</option>
                    <option value="us">US</option>
                    <option value="eastern">Eastern</option>
                  </select>
                  {errors.baseTimezone && (
                    <span className="text-red-500 text-xs">
                      {errors.baseTimezone.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-row">
                <Label
                  className="w-1/3 text-sm text-muted-foreground mr-4"
                  htmlFor="baseCurrency"
                >
                  Base Currency:
                </Label>
                <div className="flex flex-col w-full">
                  <select
                    id="baseCurrency"
                    className={`w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                      errors.baseCurrency ? "border-red-500" : ""
                    }`}
                    {...register("baseCurrency", {
                      required: "Base Currency is required",
                    })}
                  >
                    <option value="">Select a Currency</option>
                    <option value="usd">USD</option>
                    <option value="gbp">GBP</option>
                    <option value="euro">Euro</option>
                  </select>
                  {errors.baseCurrency && (
                    <span className="text-red-500 text-xs">
                      {errors.baseCurrency.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-row">
                <Label
                  className="w-1/3 text-sm text-muted-foreground mr-4"
                  htmlFor="dateFormat"
                >
                  Date Format:
                </Label>
                <div className="flex flex-col w-full">
                  <select
                    id="dateFormat"
                    className={`w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                      errors.dateFormat ? "border-red-500" : ""
                    }`}
                    {...register("dateFormat", {
                      required: "Date Format is required",
                    })}
                  >
                    <option value="">Select a Date Format</option>
                    <option value="dmy">dd/mm/yyyy</option>
                    <option value="myd">mm/dd/yyyy</option>
                    <option value="ymd">yyyy/mm/dd</option>
                  </select>
                  {errors.dateFormat && (
                    <span className="text-red-500 text-xs">
                      {errors.dateFormat.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-row">
                <Label
                  className="w-1/3 text-sm text-muted-foreground mr-4"
                  htmlFor="language"
                >
                  Languages:
                </Label>
                <div className="flex flex-col w-full">
                  <select
                    id="language"
                    className={`w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                      errors.language ? "border-red-500" : ""
                    }`}
                    {...register("language", {
                      required: "Language is required",
                    })}
                  >
                    <option value="">Select a Language</option>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                  </select>
                  {errors.language && (
                    <span className="text-red-500 text-xs">
                      {errors.language.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-row">
                <Label
                  className="w-1/3 text-sm text-muted-foreground mr-4"
                  htmlFor="fontSize"
                >
                  Font Size:
                </Label>
                <div className="flex flex-col w-full">
                  <select
                    id="fontSize"
                    className={`w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                      errors.fontSize ? "border-red-500" : ""
                    }`}
                    {...register("fontSize", {
                      required: "Font Size is required",
                    })}
                  >
                    <option value="">Select a Font Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                  {errors.fontSize && (
                    <span className="text-red-500 text-xs">
                      {errors.fontSize.message}
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Submit</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Customisation;
