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

export default function Review() {
  return (
    <div className="text-muted-foreground text-sm flex flex-col gap-2">
      <div>Good morning , Adil Khan</div>
      <div className="w-full flex justify-end gap-2">
        <li>$</li>
        <li>Advanced Filters</li>
        <li>Date Range</li>
        <li>All Accounts</li>
        <li>All Strategies</li>
        <li>All Setups</li>
      </div>

      <div className="data flex gap-2 w-full">
        <Box key_={"Total Profit"} value={12345} />
        <Box key_="Total Loss" value={4567} />
        <Box key_="Total Trades" value={1234} />
        <Box key_="Total Trades" value={1234} />
        <Box key_="Total Trades" value={1234} />
      </div>

      <div className="w-full flex gap-2">
        <div className="w-1/2 border h-72">
          <Chart />{" "}
        </div>
        <div className="w-1/2 border h-72">
          <Calendar />
        </div>
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
    </div>
  );
}

const Box = ({ key_, value }) => {
  return (
    <div className="flex flex-col p-3 text-center bg-muted">
      <p>{key_}</p>
      <p className="text-primary font-bold"> {value} </p>
    </div>
  );
};
const Chart = () => {
  return (
    <iframe
      className="w-full h-full"
      src="https://sslcharts.investing.com/index.php?force_lang=1&pair_ID=1&timescale=300&candles=50&style=candles"
    ></iframe>
  );
};
const Calendar = () => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?src=addressbook%23contacts%40group.v.calendar.google.com&ctz=Asia%2FKathmandu"
      className="h-full w-full"
      frameborder="0"
    ></iframe>
  );
};

const ThreeTabs = () => {
  return (
    <div className="flex gap-12 text-primary h-96">
      <div className="flex-1 h-full border flex flex-col bg-muted ">
        <p className="font-bold text-2xl "> Summary</p>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
      </div>
      <div className="flex-1 h-full border flex flex-col bg-muted ">
        <p className="font-bold text-2xl "> Summary</p>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
      </div>
      <div className="flex-1 h-full border flex flex-col bg-muted ">
        <p className="font-bold text-2xl "> Summary</p>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
        <div className="flex justify-between">
          <p> Average RR</p>
          <p>2.2R</p>
        </div>
        <div className="flex justify-between">
          <p> Average RR</p>
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
