"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OpenedClosedTradesUI = ({ data }) => {
  const [activeTab, setActiveTab] = useState("openedTrades");

  const openedTrades = data.filter((trade) => trade.status !== "In Progress");
  const closedTrades = data.filter((trade) => trade.status === "Loss");

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-start mb-4">
        <button
          className={`px-4 py-2 rounded-l-md ${
            activeTab === "openedTrades"
              ? "bg-[#174894] text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("openedTrades")}
        >
          Opened Trades
        </button>
        <button
          className={`px-4 py-2 rounded-r-md ${
            activeTab === "closedTrades"
              ? "bg-[#174894] text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("closedTrades")}
        >
          Closed Trades
        </button>
      </div>
      <div className="flex flex-col">
        <Table className="rounded-ls overflow-hidden">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                TRADE NO.
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                PAIR
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                TREND
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                SETUP
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                R
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                STATUS
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                LOT SIZE
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                OPENED
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                TIME IN TRADE
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                SL SIZE
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                CONFLUENCES
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                NOTES
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(activeTab === "openedTrades" ? openedTrades : closedTrades).map(
              (trade, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-center">
                    {trade["tradeNo"]}
                  </TableCell>
                  <TableCell className="font-medium text-center whitespace-nowrap">
                    {trade.pair}
                  </TableCell>
                  <TableCell className="font-medium text-center whitespace-nowrap">
                    {trade.trend}
                  </TableCell>
                  <TableCell className="font-medium text-center whitespace-nowrap">
                    {trade.setup}
                  </TableCell>
                  <TableCell className="font-medium text-center whitespace-nowrap">
                    {trade.risk_reward}
                  </TableCell>
                  <TableCell className="font-medium text-center whitespace-nowrap">
                    {trade.status}
                  </TableCell>
                  <TableCell className="font-medium text-center whitespace-nowrap">
                    {trade.lot_size}
                  </TableCell>
                  <TableCell className="font-medium text-center whitespace-nowrap">
                    {trade.opened}
                  </TableCell>
                  <TableCell className="font-medium text-center whitespace-nowrap">
                    {trade.closed}
                  </TableCell>
                  <TableCell className="font-medium text-center whitespace-nowrap">
                    {trade.time_in_trade}
                  </TableCell>
                  <TableCell className="font-medium text-center whitespace-nowrap">
                    {trade.stoploss_size}
                  </TableCell>
                  <TableCell className="font-medium text-center whitespace-nowrap">
                    {trade.confluences}
                  </TableCell>
                  <TableCell className="font-medium text-center whitespace-nowrap">
                    {trade.notes}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OpenedClosedTradesUI;
