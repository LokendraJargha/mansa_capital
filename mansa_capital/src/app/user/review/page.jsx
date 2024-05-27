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
import PerformanceChart from "./PerformanceChart";
import PerformanceTable from "./PerformanceTable";
// import SpiderGraph from "./SpiderGraph";

export default function Review() {
  return (
    <div className="text-muted-foreground text-sm flex flex-col gap-2">


      <div className="w-full flex gap-2">


      </div>
      <ThreeTabs />

      <div>
        <p className="text-xl font-bold text-center">
          OPEN POSITIONS | RECENT TRADES | CANCELLED TRADES
        </p>
      </div>

      <TradeTable />
      <DoneTrade />

      <div className="lessonmistakes flex flex-col gap-4">
        <p className="font-bold">Lessons</p>
        <textarea
          disabled
          className="h-60 border border-primary"
          cols={30}
          value={`1) \n 2) \n 3) `}
        />

        <p className="font-bold">Lessons</p>
        <textarea
          disabled
          className="h-60 border border-primary"
          cols={30}
          value={`1) \n 2) \n 3) `}
        />
      </div>

      <div className="w-1/2">
        <PerformanceChart />
      </div>
      <PerformanceTable />
      {/* <SpiderGraph /> */}
      <WeeklyReflection />
    </div>
  );
}



WWW
const ThreeTabs = () => {
  return (
    <div className="flex gap-12 text-primary">
      <div className="flex-1 h-full border flex flex-col bg-muted p-2">
        <p className="font-bold text-2xl "> Summary</p>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
        <div className="flex justify-between">
          <p> Average duration</p>
          <p>15h 13m</p>
        </div>
        <div className="flex justify-between">
          <p>Total Trades</p>
          <p>40</p>
        </div>
        <div className="flex justify-between">
          <p> Account Age</p>
          <p>76d 18h 32m</p>
        </div>
        <div className="flex justify-between">
          <p> Profit</p>
          <p>2.1</p>
        </div>
      </div>
      <div className="flex-1 h-full border flex flex-col bg-muted p-2 ">
        <p className="font-bold text-2xl "> Winning Trades</p>
        <div className="flex justify-between">
          <p> Total Winners</p>
          <p>22</p>
        </div>
        <div className="flex justify-between">
          <p>Best Win</p>
          <p>6.16%</p>
        </div>
        <div className="flex justify-between">
          <p> Average win</p>
          <p>1.38%</p>
        </div>
        <div className="flex justify-between">
          <p> Average duration</p>
          <p>1d 0h 42m</p>
        </div>
        <div className="flex justify-between">
          <p> Average Win Streak</p>
          <p>3</p>
        </div>
        <div className="flex justify-between">
          <p> Max Win Streak </p>
          <p>6</p>
        </div>
      </div>
      <div className="flex-1 h-full border flex flex-col bg-muted p-2 ">
        <p className="font-bold text-2xl "> Losing Trades</p>
        <div className="flex justify-between">
          <p> Total Losers</p>
          <p>16</p>
        </div>
        <div className="flex justify-between">
          <p> Worst Loss</p>
          <p>-0.39%</p>
        </div>
        <div className="flex justify-between">
          <p> Average Loss</p>
          <p>-0.24%</p>
        </div>
        <div className="flex justify-between">
          <p> Average Duration</p>
          <p>4h 5m</p>
        </div>
        <div className="flex justify-between">
          <p> Average Loss Streak</p>
          <p>2.2</p>
        </div>
        <div className="flex justify-between">
          <p> Max Loss Streak</p>
          <p>2.2R</p>
        </div>
      </div>
    </div>
  );
};

const TradeTable = () => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Pair</TableHead>
          <TableHead>NetPnL</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">2023-23-12</TableCell>
          <TableCell>EURUSD</TableCell>
          <TableCell>$1000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">2023-23-12</TableCell>
          <TableCell>EURUSD</TableCell>
          <TableCell>$1000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">2023-23-12</TableCell>
          <TableCell>EURUSD</TableCell>
          <TableCell>$1000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">2023-23-12</TableCell>
          <TableCell>EURUSD</TableCell>
          <TableCell>$1000</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell>$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
const DoneTrade = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Trade No.</TableHead>
          <TableHead>Pair</TableHead>
          <TableHead>Phase</TableHead>
          <TableHead>Setup</TableHead>
          <TableHead>R</TableHead>
          <TableHead>Result</TableHead>
          <TableHead>Lot Size</TableHead>
          <TableHead>Opened</TableHead>
          <TableHead>Closed</TableHead>
          <TableHead>Time in Trade</TableHead>
          <TableHead>SL Size</TableHead>
          <TableHead>Confluences (tags)</TableHead>
          <TableHead>Notes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1270823</TableCell>
          <TableCell>EURUSD</TableCell>
          <TableCell>D1: Up, D2 Up, D3 : Down</TableCell>
          <TableCell>1A</TableCell>
          <TableCell>8.8</TableCell>
          <TableCell>120</TableCell>
          <TableCell>3</TableCell>
          <TableCell>270823, 12:19PM In Progress GMT</TableCell>
          <TableCell>In Progress</TableCell>
          <TableCell></TableCell>
          <TableCell>5 pips</TableCell>
          <TableCell>
            MTF + HFF MT4 Simpson, Refined POI MTF, LO Sweeps, Inducement LiO,
            CM M15, CM M5, Flip, V-Shapes
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2270823</TableCell>
          <TableCell>EURUSD</TableCell>
          <TableCell>D1: Up, D3: Up, D5 : Down</TableCell>
          <TableCell>2B</TableCell>
          <TableCell>5</TableCell>
          <TableCell>120</TableCell>
          <TableCell>2</TableCell>
          <TableCell>270823, 12:19PM GMT</TableCell>
          <TableCell>270823, 14:19PM GMT</TableCell>
          <TableCell>2 hours 3 mins</TableCell>
          <TableCell>7 pips</TableCell>
          <TableCell>
            MTF + HFF MT4 Simpson, Refined POI MTF, LO Sweeps, Inducement LiO,
            CM M15, CM M5, Flip, V-Shapes
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3270823</TableCell>
          <TableCell>EURUSD</TableCell>
          <TableCell>D1: Up, D5 Up, D3 : Down</TableCell>
          <TableCell>3A</TableCell>
          <TableCell>24</TableCell>
          <TableCell>120</TableCell>
          <TableCell>5</TableCell>
          <TableCell>270823, 12:19PM GMT</TableCell>
          <TableCell>270823, 13:33PM GMT</TableCell>
          <TableCell>1 hour 18 mins</TableCell>
          <TableCell>2.5 pips</TableCell>
          <TableCell>
            MTF + HFF MT4 Simpson, Refined POI MTF, LO Sweeps, Inducement LiO,
            CM M15, CM M5, Flip, V-Shapes
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

const WeeklyReflection = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xl font-bold">Weekly Reflection</p>
      <p>On Scale of 1-10 , how happy were you this week and why?</p>
      <input type="range" min="1" max="100" class="slider" id="myRange" />
      <p>What were your three big wins for the week?</p>
      <input type="text" placeholder="1.Do this" className="w-1/2 border p-2" />
      <input type="text" placeholder="2.Do this" className="w-1/2 border p-2" />
      <input type="text" placeholder="3.Do this" className="w-1/2 border p-2" />
      <p>
        Did you take all trades according to the plan? If not, how will you
        improve next week? Are there specific areas you need to improve upon?
      </p>
      <textarea
        rows={5}
        type="text"
        placeholder=""
        className="w-1/2 border p-2"
      />
      <p>
        What was the biggest lesson you learned this week? Were there common
        patterns or mistakes in your trades?
      </p>
      <textarea
        rows={5}
        type="text"
        placeholder=""
        className="w-1/2 border p-2"
      />
      <p>
        What are the three big milestones that if you hit would make next week a
        win for you?
      </p>
      <input type="text" placeholder="1.Do this" className="w-1/2 border p-2" />
      <input type="text" placeholder="2.Do this" className="w-1/2 border p-2" />
      <input type="text" placeholder="3.Do this" className="w-1/2 border p-2" />
      <p>
        What might prevent you from achieving these milestones and what can you
        do to get around it?
      </p>
      <textarea
        rows={5}
        type="text"
        placeholder=""
        className="w-1/2 border p-2"
      />
    </div>
  );
};
