"use client";
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
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const columnData = [
  {
    setupName: "Artful Dodger",
    category: "Pattern",
    logic: "if then else",
    alertMechanism: ["Mobile", "Email", "App", "Notification"],
    alertsPerMonthPerInstrument: "23",
  },
  {
    setupName: "Turnaround Induction",
    category: "Entry",
    logic: "if then else",
    alertMechanism: ["Mobile", "Email", "App", "Notification"],
    alertsPerMonthPerInstrument: "23",
  },
  {
    setupName: "Turnaround Induction",
    category: "Entry",
    logic: "if then else",
    alertMechanism: ["Mobile", "Email", "App", "Notification"],
    alertsPerMonthPerInstrument: "23",
  },
  {
    setupName: "Turnaround Induction",
    category: "Pattern",
    logic: "if then else",
    alertMechanism: ["Mobile", "Email", "App", "Notification"],
    alertsPerMonthPerInstrument: "23",
  },
];

export default function setup() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/user/plan/setup/details");
  };
  return (
    <div className="flex flex-col m-3 px-3 py-6 rounded-lg  bg-white">
      <div className="flex  items-center justify-end mb-4 gap-4">
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
        <Button
          variant="outline"
          className="bg-gray-400 hover:bg-[#174894] hover:text-white"
          onClick={handleClick}
        >
          Setup Details
        </Button>
      </div>
      <Table className="rounded-sm overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center bg-[#174894] text-white">
              SETUP NAME
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              CATEGORY
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              LOGIC
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
              className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"}
            >
              <TableCell className="font-medium text-center">
                {item.setupName}
              </TableCell>
              <TableCell className="text-center">{item.category}</TableCell>
              <TableCell className="text-center">{item.logic}</TableCell>
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
  );
}
