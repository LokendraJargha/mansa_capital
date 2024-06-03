"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search } from "lucide-react";

const columnData = [
  {
    strategyName: "TWR",
    category: "",
    associatedSetups: ["Key Level"],
    alertMechanism: ["Mobile", "Email", "App", "Notification"],
    alertsPerMonthPerInstrument: "23",
  },
  {
    strategyName: "EWN",
    category: "Entry",
    associatedSetups: ["Triangle", "Zig-Zag", "Flat"],
    alertMechanism: ["Mobile", "Email", "App", "Notification"],
    alertsPerMonthPerInstrument: "31",
  },
  {
    strategyName: "EWT",
    category: "Entry",
    associatedSetups: ["Symmetrical", "Diametric"],
    alertMechanism: ["Mobile", "Email", "App", "Notification"],
    alertsPerMonthPerInstrument: "23",
  },
  {
    strategyName: "RTP",
    category: "Entry",
    associatedSetups: ["Artful", "Dodger"],
    alertMechanism: ["Mobile", "Email", "App", "Notification"],
    alertsPerMonthPerInstrument: "23",
  },
];

export default function Strategy() {
  const router = useRouter();
  // const handleClick = () => {
  //   router.push("/user/plan/strategy/details");
  // };

  const handleRowClick = (strategyName) => {
    router.push(`/user/plan/strategy/details?strategyName=${strategyName}`);
  };
  return (
    <div className="flex m-3 px-3 py-6 rounded-lg bg-white overflow-hidden shadow-md">
      <div className="flex flex-col w-full">
        <div className="flex justify-end items-center mt-4 mb-4 gap-4">
          <div className="flex flex-row items-center pl-2 pr-4 py-2 border border-gray-300 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 bg-white dark:bg-zinc-700 dark:text-white shadow-md">
            <Search className="text-gray-500 dark:text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Type to search..."
              className="bg-transparent flex-grow outline-none text-gray-800 dark:text-white"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <Table className="rounded-lg overflow-hidden">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center bg-[#174894] text-white">
                  STRATEGY NAME
                </TableHead>
                <TableHead className="text-center bg-[#174894] text-white">
                  CATEGORY
                </TableHead>
                <TableHead className="text-center bg-[#174894] text-white">
                  ASSOCIATED SETUPS
                </TableHead>
                <TableHead className="text-center bg-[#174894] text-white">
                  ALERT MECHANISM
                </TableHead>
                <TableHead className="text-center bg-[#174894] text-white">
                  ALERTS PER MONTH PER INSTRUMENT
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {columnData.map((item, index) => (
                <TableRow
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-gray-100 cursor-pointer"
                      : "bg-gray-300 cursor-pointer"
                  }
                  onClick={() => handleRowClick(item.strategyName)}
                >
                  <TableCell className="font-medium text-center">
                    {item.strategyName}
                  </TableCell>
                  <TableCell className="text-center">{item.category}</TableCell>
                  <TableCell className="text-center">
                    {item.associatedSetups.map((setup, index) => (
                      <span key={index}>{setup} </span>
                    ))}
                  </TableCell>
                  <TableCell className="text-center">
                    {item.alertMechanism}
                  </TableCell>
                  <TableCell className="text-center">
                    {item.alertsPerMonthPerInstrument}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
