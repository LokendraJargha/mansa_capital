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
import OpenedClosedTradesUI from "@/components/ui/openedClosedTradesUI";
import { useRouter } from "next/navigation";

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

// Replace with your actual data
const tradeData = [
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

export default function StrategyTable() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/user/plan/backtest/newbacktest");
  };

  return (
    <div className="flex mt-4 flex-col">
      <div className="flex  items-center justify-end mb-4 gap-4">
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
          Add a New Backtesting Sessin
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center bg-[#174894] text-white">
              STRATEGY
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              DESCRIPTION
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              TRADING FOR
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              WIN RATE
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              W
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              L
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              BE
            </TableHead>
            <TableHead className="text-center bg-[#174894] text-white">
              RETURN
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
      <div className="flex justify-end">
        <div className="flex justify-evenly bg-white px-4 py-2 w-[50%]">
          <div className="font-bold text-base">Account Balance:</div>
          <div className="font-bold text-base">Realised P&L:</div>
          <div className="font-bold text-base">Unrealised P&L:</div>
        </div>
      </div>
      <img
        src={`https://editorial.fxstreet.com/miscelaneous/image-638494818129142977.png`}
        alt="gbpusd chart"
        className="w-full mb-4"
      />
      <div className="flex justify-evenly gap-8">
        <div className="flex flex-col justify-between items-center border border-gray-200 rounded-md px-4 py-2 bg-gray-100 w-[20%]">
          <span className="font-medium text-left">Total Invested Capital</span>
          <span className="text-right">£1,000</span>
        </div>
        <div className="flex flex-col justify-between items-center border border-gray-200 rounded-md px-4 py-2 bg-gray-100 w-[20%]">
          <span className="font-medium text-left">Total Net P&L Earned</span>
          <span className="text-right">£235</span>
        </div>
        <div className="flex flex-col justify-between items-center border border-gray-200 rounded-md px-4 py-2 bg-gray-100 w-[20%]">
          <span className="font-medium text-left">Win Loss</span>
          <span className="text-right">65.2%</span>
        </div>
        <div className="flex flex-col justify-between items-center border border-gray-200 rounded-md px-4 py-2 bg-gray-100 w-[20%]">
          <span className="font-medium text-left">Risk Reward (ave.)</span>
          <span className="text-right">8.8</span>
        </div>
        <div className="flex flex-col justify-between items-center border border-gray-200 rounded-md px-4 py-2 bg-gray-100 w-[20%]">
          <span className="font-medium text-left">Drawdown (max)</span>
          <span className="text-right">£120</span>
        </div>
      </div>

      <OpenedClosedTradesUI data={tradeData} />
    </div>
  );
}
