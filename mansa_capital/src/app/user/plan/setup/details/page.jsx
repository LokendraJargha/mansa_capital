"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SetupComponent = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/user/plan/setup");
  };

  return (
    <div className="flex m-2 p-2 rounded-sm bg-white">
      <div className="mb-4">
        <button
          className="text-white bg-gray-400 hover:bg-black hover:font-bold p-2 rounded-md"
          onClick={handleClick}
        >
          ← ALL SETUPS
        </button>
      </div>
      <div className="flex gap-4">
        <div className="w-full md:w-1/3">
          <div className="mb-4">
            <label className="text-base font-semibold">SETUP NO.</label>
            <span className="ml-4">NO+DDMMYY</span>
          </div>
          <div className="mb-4">
            <label className="text-base font-semibold">SETUP DESCRIPTION</label>
            <textarea
              className="border-2 p-4 mb-4 w-[100%]"
              placeholder="SETUP DESCRIPTION"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="text-base font-semibold">SETUP LOGIC</label>
            <textarea
              className="border-2 p-4 mb-4 w-[100%]"
              placeholder="SETUP LOGIC"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="text-base font-semibold">
              FREQUENCY PER MONTH
            </label>
            <span className="ml-4">23</span>
          </div>
          <div className="mb-4">
            <label className="text-base font-semibold">
              USUAL TIME OF APPEARANCE
            </label>
            <span className="ml-4">
              London Session (3), New York Session (15), Asia Session (2), Out
              of Session (3)
            </span>
          </div>
          <div className="mb-4">
            <label className="text-base font-semibold">SUCCESS RATIO</label>
            <span className="ml-4">35%</span>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Setup Name</h3>
            <div className="border p-4 h-64 bg-zinc-200 flex items-center justify-center">
              ADD SCREENSHOTS FOR SCHEMA
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">EXAMPLES</h3>
            <div className="border p-4 h-64 bg-zinc-200 flex items-center justify-center">
              ADD SCREENSHOTS FOR EXAMPLES
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Notes</label>
        <textarea className="border-2 border-gray-200 rounded-md"></textarea>
      </div>
    </div>
  );
};

export default SetupComponent;
