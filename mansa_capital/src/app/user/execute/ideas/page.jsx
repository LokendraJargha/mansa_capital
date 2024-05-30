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
    instrument: "GOLD",
    time: "30 April 2024, 13:49",
    strategy: "ZZD",
    trend: "Down",
    s_length_time_and_price: "",
    waveCount: "C",
    pointOfInterests: "2310, 2335, 2340",
    notes: "Go Short",
    action: "Take Trade",
  },
];

export default function setup() {
  return (
    <div className="flex flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center bg-[#174894] text-white">
              INSTRUMENT
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              TIME
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              STRATEGY
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              TREND
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              S.LENGTH (TIME & PRICE)
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              WAVE COUNT
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              POINT OF INTERESTS
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              NOTES
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              ACTION
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
                {item.instrument}
              </TableCell>
              <TableCell className="text-center">{item.time}</TableCell>
              <TableCell className="text-center">{item.strategy}</TableCell>
              <TableCell className="text-center">{item.trend}</TableCell>
              <TableCell className="text-center">
                {item.s_length_time_and_price}
              </TableCell>
              <TableCell className="text-center">{item.waveCount}</TableCell>
              <TableCell className="text-center">
                {item.pointOfInterests}
              </TableCell>
              <TableCell className="text-center">{item.notes}</TableCell>
              <TableCell className="text-center">{item.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
         
    </div>
  );
}
