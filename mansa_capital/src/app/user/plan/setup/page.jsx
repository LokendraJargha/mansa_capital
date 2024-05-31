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
  // const handleClick = () => {
  //   router.push("/user/plan/setup/details");
  // };

  const handleRowClick = (setupName) => {
    router.push(`/user/plan/setup/details?setupName=${setupName}`);
  };

  return (
    <div className="flex flex-col m-2 p-2 rounded-sm  bg-white">
      <div className="flex  items-center justify-end mb-4 gap-4">
        <input
          type="text"
          placeholder="Type to search..."
          className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-white"
        />
        {/* <Button
          variant="outline"
          className="bg-gray-400 hover:bg-[#174894] hover:text-white"
          onClick={handleClick}
        >
          Setup Details
        </Button> */}
      </div>
      <Table>
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
              className={
                index % 2 === 0
                  ? "bg-gray-100 cursor-pointer"
                  : "bg-gray-300 cursor-pointer"
              }
              onClick={() => handleRowClick(item.setupName)}
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
