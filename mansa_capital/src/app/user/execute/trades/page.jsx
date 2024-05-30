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
    <>
      <div className="flex items-center justify-center my-4">
        <button
          variant="outline"
          className="bg-gray-500 w-[20%] ml-2 hover:bg-black hover:text-white rounded-lg"
        >
          Advanced Filters
        </button>
        <button
          variant="outline"
          className="bg-gray-500 w-[20%] ml-2 hover:bg-black hover:text-white rounded-lg"
        >
          Date Range
        </button>
        <button
          variant="outline"
          className="bg-gray-500 w-[20%] ml-2 hover:bg-black hover:text-white rounded-lg"
        >
          All Accounts
        </button>
        <button
          variant="outline"
          className="bg-gray-500 w-[20%] ml-2 hover:bg-black hover:text-white rounded-lg"
        >
          All Strategies
        </button>
        <button
          variant="outline"
          className="bg-gray-500 w-[20%] ml-2 hover:bg-black hover:text-white rounded-lg"
        >
          All Setups
        </button>
      </div>
      <div className="flex flex-col">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center bg-[#174894] text-white">
                TRADE NO.
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
                PAIR
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
                TREND
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
                SETUP
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
                R
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
                STATUS
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
                LOT SIZE
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
                OPENED
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
                TIME IN TRADE
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
                SL SIZE
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
                CONFLUENCES
              </TableHead>
              <TableHead className="text-center bg-[#174894] text-white">
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
                <TableCell className="font-medium text-center">
                  {item.tradeNo}
                </TableCell>
                <TableCell className="text-center">{item.pair}</TableCell>
                <TableCell className="text-center">{item.trend}</TableCell>
                <TableCell className="text-center">{item.setup}</TableCell>
                <TableCell className="text-center">
                  {item.risk_reward}
                </TableCell>
                <TableCell className="text-center">{item.status}</TableCell>
                <TableCell className="text-center">{item.lot_size}</TableCell>
                <TableCell className="text-center">{item.opened}</TableCell>
                <TableCell className="text-center">
                  {item.time_in_trade}
                </TableCell>
                <TableCell className="text-center">
                  {item.stoploss_size}
                </TableCell>
                <TableCell className="text-center">
                  {item.confluences}
                </TableCell>
                <TableCell className="text-center">{item.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
