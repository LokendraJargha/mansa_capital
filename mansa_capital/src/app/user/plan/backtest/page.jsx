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
    strategy: "LG",
    description: "SMC LG Setups",
    tradingFor: "76D 18H 32M",
    winRate: "60%",
    win: 24,
    loss: 16,
    breakEven: 0,
    return: "29.71%",
    action: "continue testing, duplicate, edit, analytics, journal delete",
  },
  {
    strategy: "WL",
    description: "SMC WL Setups",
    tradingFor: "76D 18H 32M",
    winRate: "60%",
    win: 24,
    loss: 16,
    breakEven: 0,
    return: "29.71%",
    action: "testing completed",
  },
  {
    strategy: "WL",
    description: "SMC WL Setups",
    tradingFor: "76D 18H 32M",
    winRate: "60%",
    win: 24,
    loss: 16,
    breakEven: 0,
    return: "29.71%",
    action: "testing halted, testing paused",
  },
];

export default function setup() {
  return (
    <div className="flex flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">STRATEGY</TableHead>
            <TableHead className="text-center">DESCRIPTION</TableHead>
            <TableHead className="text-center">TRADING FOR</TableHead>
            <TableHead className="text-center">WIN RATE</TableHead>
            <TableHead className="text-center">W</TableHead>
            <TableHead className="text-center">L</TableHead>
            <TableHead className="text-center">BE</TableHead>
            <TableHead className="text-center">RETURN</TableHead>
            <TableHead className="text-center">ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {columnData.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-center">
                {item.strategy}
              </TableCell>
              <TableCell className="text-center">{item.description}</TableCell>
              <TableCell className="text-center">{item.tradingFor}</TableCell>
              <TableCell className="text-center">{item.winRate}</TableCell>
              <TableCell className="text-center">{item.win}</TableCell>
              <TableCell className="text-center">{item.loss}</TableCell>
              <TableCell className="text-center">{item.breakEven}</TableCell>
              <TableCell className="text-center">{item.return}</TableCell>
              <TableCell className="text-center">{item.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="outline"
        className="bg-gray-400 w-[20%] ml-2 hover:bg-black hover:text-white"
      >
        Add a New Backtesting Session
      </Button>
         
    </div>
  );
}
