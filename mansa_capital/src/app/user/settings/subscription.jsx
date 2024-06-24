"use client";
import { useEffect, useState } from "react";
import useSubsStore from "../../../../config/subscriptionStore";
import useAuthStore from "../../../../config/userStore";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify"; // Assuming toast is imported for notifications

const Subscription = () => {
  const { subscriptionScheduleId, subscribedUserData } = useSubsStore();
  const { loggedInUserData } = useAuthStore();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Example of using setState in a lifecycle method
  }, []);

  const handleToggle = () => {
    setToggle((prevToggle) => (prevToggle !== undefined ? !prevToggle : false));
  };

  // Function to format date and get day of the month
  const getDate = (date) => {
    const d = new Date(date);
    const day = d.getDate();
    return day;
  };

  // Function to handle cancellation of subscription
  const handleCancelSubscription = async () => {
    console.log("Cancelling subscription...");
    console.log("Subscription schedule ID:", subscribedUserData);
    try {
      if (!subscriptionScheduleId) {
        throw new Error("Subscription schedule ID is not defined");
      }

      console.log("Canceling subscription with ID:", subscriptionScheduleId);

      const response = await fetch(
        `/api/subscription/cancel?subscriptionScheduleId=${subscriptionScheduleId}`,
        {
          method: "DELETE",
        }
      );

      const resData = await response.json();
      console.log("Cancellation response:", resData);

      if (response.ok) {
        toast.success("Subscription canceled successfully");
        // Update UI or state here
      } else {
        toast.error("Failed to cancel subscription");
      }
    } catch (error) {
      console.error("Error canceling subscription:", error);
      toast.error("Failed to cancel subscription");
    }
  };

  return (
    <div className="flex flex-row p-4">
      <div className="flex w-1/5 m-4 text-lg">SUBSCRIPTIONS</div>
      <div className="flex w-4/5">
        <ul className="text-sm w-full text-muted-foreground">
          <li className="m-4">
            1 Account connected x{" "}
            {subscribedUserData
              ? subscribedUserData.amount + " " + subscribedUserData.currency
              : "USD 100"}{" "}
            - renewed Automatically on{" "}
            {subscribedUserData ? getDate(subscribedUserData.endDate) : "dd"} of
            every month
          </li>
          <li className="flex flex-row m-4">
            <div className="flex w-1/2">Customer Agreement</div>
            <div className="flex w-1/2">User Feedback</div>
          </li>
          <li className="m-4">Risk Disclosure</li>
          <li className="m-4">
            {/* Fix the onClick handler syntax */}
            <Button onClick={handleCancelSubscription}>
              Cancel Subscription
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Subscription;
