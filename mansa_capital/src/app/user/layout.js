"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "../../../config/userStore";
import Sidebar from "@/components/ui/sidebar";
import Header from "@/components/ui/header";

export default function UserLayout({ children }) {
  const { _hasHydrated, loggedInUserData, isActiveSubscriber, setIsActiveSubscriber } = useAuthStore();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  
  const checkSubscription = async () => {
    const userEmail = loggedInUserData?.email;
    console.log("User data:", userEmail);

    try {
      const response = await fetch(`/api/subscription/subscribe?email=${userEmail}`, {
        headers: {
          Authorization: `Bearer ${localStorage.mansa_capital_token}`,
        },
        method: "GET",
        accept: loggedInUserData?.email,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        router.push("/auth/payment");
      }

      const data = await response.json();
      console.log('Response data:', data); // Check the structure and content of the response data

      // Validate data structure before accessing subsData.length
      if (data  && Array.isArray(data)) {
          if (data.length === 0) {
            router.push("/auth/login");
              console.log("User is notes subscribed");// Ensure router is correctly set up
          } else {
              console.log("User is subscribed");
              setIsActiveSubscriber(true);
              // Handle subscribed user case if needed
          }
      } else {
          console.error('Invalid or missing subsData in response');

          // Handle unexpected data format or missing subsData
      }
    } catch (error) {
      console.error("Error fetching Account data:", error);
      router.push("/auth/payment");
    }
  };
  useEffect(() => {
    setMounted(true);
  }, [_hasHydrated]);

  useEffect(() => {
    if (_hasHydrated && !loggedInUserData) {
      router.push("/auth/login");
    } else if (_hasHydrated && loggedInUserData && !isActiveSubscriber) {
      // Call checkSubscription function and handle its promise resolution
      checkSubscription().then(() => {
        // Once subscription check is complete, navigate to review actions page
        
      }).catch((error) => {
        console.error("Failed to check subscription:", error);
        // Handle error if necessary
      });
    }
  }, [_hasHydrated, loggedInUserData, isActiveSubscriber]);
  
  return _hasHydrated && isActiveSubscriber && mounted && loggedInUserData ? (
    <div className="flex flex-col h-screen">
      <div className="fixed w-full top-0 z-10">
        <Header />
      </div>
      <div className="flex flex-row flex-1 pt-14 bg-zinc-200">
        <div className="w-[20%] h-full fixed top-16">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1 ml-[20%] overflow-y-auto overflow-x-auto mt-5 bg-zinc-200">
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  ) : null;
}
