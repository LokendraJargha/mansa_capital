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
  return (
    <>
      <div className="flex justify-between items-center mb-4 gap-4">
        <Input placeholder="Search..." />
        <Button
          variant="outline"
          className="bg-gray-400 hover:bg-black hover:text-white"
        >
          Add a New Strategy
        </Button>
      </div>
      <div className="flex flex-col">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center bg-zinc-800 text-white">
                STRATEGY NAME
              </TableHead>
              <TableHead className="text-center bg-zinc-800 text-white">
                CATEGORY
              </TableHead>
              <TableHead className="text-center bg-zinc-800 text-white">
                ASSOCIATED SETUPS
              </TableHead>
              <TableHead className="text-center bg-zinc-800 text-white">
                ALERT MECHANISM
              </TableHead>
              <TableHead className="text-center bg-zinc-800 text-white">
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
