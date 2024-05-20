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

export default function Plan() {
  return (
    <div className="flex flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">STRATEGY NAME</TableHead>
            <TableHead className="text-center">CATEGORY</TableHead>
            <TableHead className="text-center">ASSOCIATED SETUPS</TableHead>
            <TableHead className="text-center">ALERT MECHANISM</TableHead>
            <TableHead className="text-center">
              ALERTS PER MONTH PER INSTRUMENT
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {columnData.map((item, index) => (
            <TableRow key={index}>
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
      <Button
        variant="outline"
        className="bg-gray-400 w-[20%] ml-2 hover:bg-black hover:text-white"
      >
        Add a New Strategy
      </Button>
         
    </div>
  );
}
