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
              ? "bg-zinc-800 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("openedTrades")}
        >
          Opened Trades
        </button>
        <button
          className={`px-4 py-2 rounded-r-md ${
            activeTab === "closedTrades"
              ? "bg-zinc-800 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("closedTrades")}
        >
          Closed Trades
        </button>
      </div>
      <div className="overflow-x-auto">
        <Table className="table-auto w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">TRADE NO.</TableHead>
              <TableHead className="text-center">PAIR</TableHead>
              <TableHead className="text-center">TREND</TableHead>
              <TableHead className="text-center">SETUP</TableHead>
              <TableHead className="text-center">R</TableHead>
              <TableHead className="text-center">STATUS</TableHead>
              <TableHead className="text-center">LOT SIZE</TableHead>
              <TableHead className="text-center">OPENED</TableHead>
              <TableHead className="text-center">TIME IN TRADE</TableHead>
              <TableHead className="text-center">SL SIZE</TableHead>
              <TableHead className="text-center">CONFLUENCES</TableHead>
              <TableHead className="text-center">NOTES</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(activeTab === "openedTrades" ? openedTrades : closedTrades).map(
              (trade, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-center">
                    {trade["tradeNo"]}
                  </TableCell>
                  <TableCell className="text-center">{trade.pair}</TableCell>
                  <TableCell className="text-center">{trade.trend}</TableCell>
                  <TableCell className="text-center">{trade.setup}</TableCell>
                  <TableCell className="text-center">
                    {trade.risk_reward}
                  </TableCell>
                  <TableCell className="text-center">{trade.status}</TableCell>
                  <TableCell className="text-center">
                    {trade.lot_size}
                  </TableCell>
                  <TableCell className="text-center">{trade.opened}</TableCell>
                  <TableCell className="text-center">{trade.closed}</TableCell>
                  <TableCell className="text-center">
                    {trade.time_in_trade}
                  </TableCell>
                  <TableCell className="text-center">
                    {trade.stoploss_size}
                  </TableCell>
                  <TableCell className="text-center">
                    {trade.confluences}
                  </TableCell>
                  <TableCell className="text-center">{trade.notes}</TableCell>
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
