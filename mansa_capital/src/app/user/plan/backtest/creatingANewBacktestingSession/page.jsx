"use client";

import React, { useState } from "react";

const CreatingANewBacktestingSession = () => {
  const [formData, setFormData] = useState({
    accountBalance: "2,000,000",
    pairs: "EURUSD, GBPUSD, US500",
    startDate: "1/1/2020",
    endDate: "1/17/2024",
    strategy: "All",
    sessionName: "London LGWL",
    description:
      "In this session, our focus is primarily on the trade setups that are appearing in London Trading Sessions.",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">
        Creating A New Backtesting Session
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 p-4 w-[60%] mx-auto"
      >
        <div className="bg-gray-200 p-2 rounded-md">
          <label className="font-semibold">ACCOUNT BALANCE</label>
          <input
            type="text"
            name="accountBalance"
            value={formData.accountBalance}
            onChange={handleChange}
            placeholder="200000"
            className="w-full border-2 border-gray-300 rounded-md py-1.5 px-4"
          />
        </div>

        <div>
          <label className="font-semibold">PAIRS</label>
          <input
            type="text"
            name="pairs"
            value={formData.pairs}
            onChange={handleChange}
            placeholder="EURUSD"
            className="w-full border-2 border-gray-300 rounded-md py-1.5 px-4"
          />
        </div>

        <div>
          <label className="font-semibold">START DATE</label>
          <input
            type="text"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            placeholder="DD/MM/YYYY"
            className="w-full border-2 border-gray-300 rounded-md py-1.5 px-4"
          />
        </div>

        <div>
          <label className="font-semibold">END DATE</label>
          <input
            type="text"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            placeholder="DD/MM/YYYY"
            className="w-full border-2 border-gray-300 rounded-md py-1.5 px-4"
          />
        </div>

        <div>
          <label className="font-semibold">STRATEGY</label>
          <input
            type="text"
            name="strategy"
            value={formData.strategy}
            onChange={handleChange}
            placeholder="All"
            className="w-full border-2 border-gray-300 rounded-md py-1.5 px-4"
          />
        </div>

        <div>
          <label className="font-semibold">NAME OF SESSION (optional)</label>
          <input
            type="text"
            name="sessionName"
            value={formData.sessionName}
            onChange={handleChange}
            placeholder="Session"
            className="w-full border-2 border-gray-300 rounded-md py-1.5 px-4"
          />
        </div>

        <div>
          <label className="font-semibold">DESCRIPTION (optional)</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-md p-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-black hover:cursor-pointer hover:font-bold "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatingANewBacktestingSession;
