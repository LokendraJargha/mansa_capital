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

console.log(process.env.MONGO_URI);
const columnData = [
  {
    instrument: "EURUSD",
    likelyDirection: "UP [x] POINTS OVER [y] PERIOD",
    positiveFactors: "",
    negativeFactors: "",
  },
  {
    instrument: "SP500",
    likelyDirection: "UP 540 POINTS OVER PERIOD",
    positiveFactors: "",
    negativeFactors: "",
  },
  {
    instrument: "AUDUSD",
    likelyDirection: "UP 540 POINTS OVER PERIOD",
    positiveFactors: "",
    negativeFactors: "",
  },
  {
    instrument: "USDCAD",
    likelyDirection: "UP 540 POINTS OVER PERIOD",
    positiveFactors: "",
    negativeFactors: "",
  },
  {
    instrument: "OIL",
    likelyDirection: "UP 540 POINTS OVER PERIOD",
    positiveFactors: "",
    negativeFactors: "",
  },
  {
    instrument: "GOLD",
    likelyDirection: "UP 540 POINTS OVER PERIOD",
    positiveFactors: "",
    negativeFactors: "",
  },
  {
    instrument: "USDJPY",
    likelyDirection: "UP 540 POINTS OVER PERIOD",
    positiveFactors: "",
    negativeFactors: "",
  },
];

export default function setup() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">INSTRUMENT</TableHead>
            <TableHead className="text-center">LIKELY DIRECTION</TableHead>
            <TableHead className="text-center">POSITIVE FACTORS</TableHead>
            <TableHead className="text-center">NEGATIVE FACTORS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {columnData.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-center">
                {item.instrument}
              </TableCell>
              <TableCell className="text-center">
                {item.likelyDirection}
              </TableCell>
              <TableCell className="text-center">
                {item.positiveFactors}
              </TableCell>
              <TableCell className="text-center">
                {item.negativeFactors}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
