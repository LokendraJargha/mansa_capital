"use client";
import { useState } from "react";

export default function Trades() {
  const [tradeData, setTradeData] = useState("");

  const fetchTradeData = async () => {
    try {
      const response = await fetch("/api/trade", {
        headers: {
          Authorization: `Bearer ${localStorage.mansa_capital_token}`,
        },
      });
      const data = await response.json();
      setTradeData(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Error fetching trade data:", error);
    }
  };
  const fetchAccountData = async () => {
    try {
      const response = await fetch("/api/account", {
        headers: {
          Authorization: `Bearer ${localStorage.mansa_capital_token}`,
        },
      });
      const data = await response.json();
      setAccountData(data);
    } catch (error) {
      console.error("Error fetching Account data:", error);
    }

    console.log("createdBy", accountData.createdBy);
  };

  return (
    <div>
      <h1>Trades</h1>
      <button onClick={fetchTradeData}>Get Trade Data</button>
      <textarea
        rows={10}
        cols={50}
        value={tradeData}
        readOnly
        placeholder="Trade data will be displayed here..."
      />
    </div>
  );
}
