import React from "react";

const SetupComponent = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <div className="mb-4">
            <a href="#" className="text-zinc-600">
              ← ALL SETUPS
            </a>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Setup [name]</h2>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">SCREENSHOTS</h3>
            <div className="border p-4 mb-4">
              <div className="h-32 bg-zinc-200 flex items-center justify-center">
                [text box]
              </div>
            </div>
            <div className="border p-4">
              <div className="h-32 bg-zinc-200 flex items-center justify-center">
                + ADD MORE SCREENSHOTS
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">SETUP INFO</h3>
            <div className="mb-2">
              <label className="block text-zinc-600">NAME</label>
              <input type="text" className="w-full border p-2" />
            </div>
            <div className="mb-2">
              <label className="block text-zinc-600">DESCRIPTION</label>
              <textarea className="w-full border p-2"></textarea>
            </div>
            <div className="mb-2">
              <label className="block text-zinc-600">LOCATION</label>
              <input type="text" className="w-full border p-2" />
            </div>
            <div className="mb-2">
              <label className="block text-zinc-600">DATE</label>
              <input type="date" className="w-full border p-2" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              ADD SCREENSHOTS FOR SCHEMA
            </h3>
            <div className="border p-4 h-64 bg-zinc-200 flex items-center justify-center">
              ADD SCREENSHOTS FOR SCHEMA
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              ADD SCREENSHOTS FOR EXAMPLES
            </h3>
            <div className="border p-4 h-64 bg-zinc-200 flex items-center justify-center">
              ADD SCREENSHOTS FOR EXAMPLES
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupComponent;
