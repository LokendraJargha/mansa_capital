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
    tradeNo: "1.270823",
    pair: "GOLD",
    trend: "D1 - Up, D2, Up, D3 - Down",
    setup: "Model A + Model EM + Model Mgmt",
    risk_reward: "8.8",
    status: "WIN",
    lot_size: "3 Contracts",
    opened: "270823, 12:15PM GMT",
    closed: "In Progress",
    time_in_trade: "In Progress",
    stoploss_size: "5 pips",
    confluences:
      "MTF + HTF Mitigation. Refined POI MTF, LQ Sweep, Inducement LID, CH M15. CH M1, Flip, V-Shape,",
    notes: "REVIEWED / NOT REVIEWED",
  },
  {
    tradeNo: "1.270823",
    pair: "EURUSD",
    trend: "D1 - Up, D2, Up, D3 - Down",
    setup: "Model B",
    risk_reward: "5",
    status: "LOSS",
    lot_size: "2 Contracts",
    opened: "270823, 12:15 PM GMT",
    closed: "270823, 14:18 PM GMT",
    time_in_trade: "2 HOUR 3 MINS",
    stoploss_size: "7 pips",
    confluences:
      "MTF + HTF Mitigation. Refined POI MTF, LQ Sweep, Inducement LID, CH M15. CH M1, Flip, V-Shape,",
    notes: "",
  },
  {
    tradeNo: "1.270823",
    pair: "EURUSD",
    trend: "D1 - Up, D2, Up, D3 - Down",
    setup: "Model C",
    risk_reward: "24",
    status: "BREAKEVEN",
    lot_size: "5 Contracts",
    opened: "270823, 12:15 PM GMT",
    closed: "270823, 13:33 PM GMT",
    time_in_trade: "1 HOUR 18 MINS",
    stoploss_size: "2.5 pips",
    confluences:
      "MTF + HTF Mitigation. Refined POI MTF, LQ Sweep, Inducement LID, CH M15. CH M1, Flip, V-Shape,",
    notes: "",
  },
  {
    tradeNo: "1.270823",
    pair: "EURUSD",
    trend: "D1 - Up, D2, Up, D3 - Down",
    setup: "Model B",
    risk_reward: "5",
    status: "LOSS",
    lot_size: "2 Contracts",
    opened: "270823, 12:15 PM GMT",
    closed: "270823, 14:18 PM GMT",
    time_in_trade: "2 HOUR 3 MINS",
    stoploss_size: "7 pips",
    confluences:
      "MTF + HTF Mitigation. Refined POI MTF, LQ Sweep, Inducement LID, CH M15. CH M1, Flip, V-Shape,",
    notes: "",
  },
  {
    tradeNo: "1.270823",
    pair: "EURUSD",
    trend: "D1 - Up, D2, Up, D3 - Down",
    setup: "Model B",
    risk_reward: "5",
    status: "LOSS",
    lot_size: "2 Contracts",
    opened: "270823, 12:15 PM GMT",
    closed: "270823, 14:18 PM GMT",
    time_in_trade: "2 HOUR 3 MINS",
    stoploss_size: "7 pips",
    confluences:
      "MTF + HTF Mitigation. Refined POI MTF, LQ Sweep, Inducement LID, CH M15. CH M1, Flip, V-Shape,",
    notes: "",
  },
  {
    tradeNo: "1.270823",
    pair: "EURUSD",
    trend: "D1 - Up, D2, Up, D3 - Down",
    setup: "Model B",
    risk_reward: "5",
    status: "LOSS",
    lot_size: "2 Contracts",
    opened: "270823, 12:15 PM GMT",
    closed: "270823, 14:18 PM GMT",
    time_in_trade: "2 HOUR 3 MINS",
    stoploss_size: "7 pips",
    confluences:
      "MTF + HTF Mitigation. Refined POI MTF, LQ Sweep, Inducement LID, CH M15. CH M1, Flip, V-Shape,",
    notes: "",
  },
  {
    tradeNo: "1.270823",
    pair: "EURUSD",
    trend: "D1 - Up, D2, Up, D3 - Down",
    setup: "Model B",
    risk_reward: "5",
    status: "LOSS",
    lot_size: "2 Contracts",
    opened: "270823, 12:15 PM GMT",
    closed: "270823, 14:18 PM GMT",
    time_in_trade: "2 HOUR 3 MINS",
    stoploss_size: "7 pips",
    confluences:
      "MTF + HTF Mitigation. Refined POI MTF, LQ Sweep, Inducement LID, CH M15. CH M1, Flip, V-Shape,",
    notes: "",
  },
  {
    tradeNo: "1.270823",
    pair: "EURUSD",
    trend: "D1 - Up, D2, Up, D3 - Down",
    setup: "Model B",
    risk_reward: "5",
    status: "LOSS",
    lot_size: "2 Contracts",
    opened: "270823, 12:15 PM GMT",
    closed: "270823, 14:18 PM GMT",
    time_in_trade: "2 HOUR 3 MINS",
    stoploss_size: "7 pips",
    confluences:
      "MTF + HTF Mitigation. Refined POI MTF, LQ Sweep, Inducement LID, CH M15. CH M1, Flip, V-Shape,",
    notes: "",
  },
];

export default function setup() {
  return (
    <div className="flex flex-col m-3 px-3 py-6 rounded-lg bg-white">
      <div className="flex items-center justify-center my-4">
        <button
          variant="outline"
          className="bg-[#174899] w-[20%]  hover:bg-[#174894] text-white hover:text-zinc-300 rounded-lg py-1.5"
        >
          Advanced Filters
        </button>
        <button
          variant="outline"
          className="bg-[#174899] w-[20%] ml-2 hover:bg-[#174894] text-white hover:text-zinc-300 rounded-lg py-1.5"
        >
          Date Range
        </button>
        <button
          variant="outline"
          className="bg-[#174899] w-[20%] ml-2 hover:bg-[#174894] text-white hover:text-zinc-300 rounded-lg py-1.5"
        >
          All Accounts
        </button>
        <button
          variant="outline"
          className="bg-[#174899] w-[20%] ml-2 hover:bg-[#174894] text-white hover:text-zinc-300 rounded-lg py-1.5"
        >
          All Strategies
        </button>
        <button
          variant="outline"
          className="bg-[#174899] w-[20%] ml-2 hover:bg-[#174894] text-white hover:text-zinc-300 rounded-lg py-1.5"
        >
          All Setups
        </button>
      </div>
      <div className="flex flex-col overflow-x-auto bg-white ">
        <Table className="rounded-sm overflow-hidden">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                TRADE NO.
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                PAIR
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                TREND
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                SETUP
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                R
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                STATUS
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                LOT SIZE
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                OPENED
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                TIME IN TRADE
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                SL SIZE
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                CONFLUENCES
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white whitespace-nowrap">
                NOTES
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {columnData.map((item, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"}
              >
                <TableCell className="font-medium text-center whitespace-nowrap">
                  {item.tradeNo}
                </TableCell>
                <TableCell className="font-medium text-center whitespace-nowrap">
                  {item.pair}
                </TableCell>
                <TableCell className="font-medium text-center whitespace-nowrap">
                  {item.trend}
                </TableCell>
                <TableCell className="font-medium text-center whitespace-nowrap">
                  {item.setup}
                </TableCell>
                <TableCell className="font-medium text-center whitespace-nowrap">
                  {item.risk_reward}
                </TableCell>
                <TableCell className="font-medium text-center whitespace-nowrap">
                  {item.status}
                </TableCell>
                <TableCell className="font-medium text-center whitespace-nowrap">
                  {item.lot_size}
                </TableCell>
                <TableCell className="font-medium text-center whitespace-nowrap">
                  {item.opened}
                </TableCell>
                <TableCell className="font-medium text-center whitespace-nowrap">
                  {item.time_in_trade}
                </TableCell>
                <TableCell className="font-medium text-center whitespace-nowrap">
                  {item.stoploss_size}
                </TableCell>
                <TableCell className="font-medium text-center whitespace-nowrap">
                  {item.confluences}
                </TableCell>
                <TableCell className="font-medium text-center whitespace-nowrap">
                  {item.notes}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
