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
  const handleClick = () => {
    router.push("/user/plan/strategy/details");
  };
  return (
    <>
      <div className="flex justify-end items-center mt-4 mb-4 gap-4">
        <input
          type="text"
          placeholder="Type to search..."
          className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-white"
        />
        <Button
          variant="outline"
          className="bg-gray-400 hover:bg-[#174894] hover:text-white"
          onClick={handleClick}
        >
          Strategy Details
        </Button>
      </div>
      <div className="flex flex-col">
        <Table>
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
                className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"}
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
    </>
  );
}
