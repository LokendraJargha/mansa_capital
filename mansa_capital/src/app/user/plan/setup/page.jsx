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
  return (
    <div className="flex flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">SETUP NAME</TableHead>
            <TableHead className="text-center">CATEGORY</TableHead>
            <TableHead className="text-center">LOGIC</TableHead>
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
