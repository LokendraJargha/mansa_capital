import Calendar from "../calendar/page";

export default function ReviewLayout({ children }) {
    return (
        <div>
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
            <div className="flex m-2 h-96 gap-4">
                <Chart />
                <Calendar />



            </div>
            {children}
        </div>
    )
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