import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const columnData = [
  {
    detail: "EURUSD",
    month: 800,
    week: 400,
    day: 200,
    hrs4: 80,
    hrs1: 40,
    min15: 20,
  },
  {
    detail: "GBPUSD",
    month: 800,
    week: 400,
    day: 200,
    hrs4: 80,
    hrs1: 40,
    min15: 20,
  },
  {
    detail: "USDJPY",
    month: 800,
    week: 400,
    day: 200,
    hrs4: 80,
    hrs1: 40,
    min15: 20,
  },
  {
    detail: "AUDUSD",
    month: 800,
    week: 400,
    day: 200,
    hrs4: 80,
    hrs1: 40,
    min15: 20,
  },
  {
    detail: "OIL",
    month: 800,
    week: 400,
    day: 200,
    hrs4: 80,
    hrs1: 40,
    min15: 20,
  },
  {
    detail: "GOLD",
    month: 800,
    week: 400,
    day: 200,
    hrs4: 80,
    hrs1: 40,
    min15: 20,
  },
  {
    detail: "US500(enter in ATRx1000 )",
    month: 800,
    week: 400,
    day: 200,
    hrs4: 80,
    hrs1: 40,
    min15: 20,
  },
];

const Pullbacks = () => {
  return (
    <div className="flex flex-row p-4">
      <div className="flex w-1/5 m-4 text-lg">PULLBACKS</div>
      <div className="flex w-4/5">
        <Table className="rounded-sm overflow-hidden">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center bg-[#174894] text-white"></TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
                M
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
                W
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
                D
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
                4H
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
                1H
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
                M15
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {columnData.map((item, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"}
              >
                <TableCell className="text-left">{item.detail}</TableCell>
                <TableCell className="text-right">{item.month}</TableCell>
                <TableCell className="text-right">{item.week}</TableCell>
                <TableCell className="text-right">{item.day}</TableCell>
                <TableCell className="text-right">{item.hrs4}</TableCell>
                <TableCell className="text-right">{item.hrs1}</TableCell>
                <TableCell className="text-right">{item.min15}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Pullbacks;
