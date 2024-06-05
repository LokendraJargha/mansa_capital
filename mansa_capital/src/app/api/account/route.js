import { insert, showAll } from "../controllers/accountController";
export async function POST(req) {
  const data = await req.json();
  const newData = {
    account_number: data.accountno,
    created_by: data.createdBy,
    password: data.password,
    account_type: data.accounttype,
    leverage: data.leverage,
    trade_entry_method: data.tradeEntryMethod,
    trade_size: data.tradeSize,
    // signal_delivery_over: data.signalDeliveryOver,
    trading_dtyle: data.tradingStyle,
    csv: data.csv,
  };
  const account = await insert(newData);

  if (account) {
    return Response.json({ message: "UserAccount created Successfully" });
  }
  return Response.json(
    { message: "UserAccount creation failed" },
    { status: 500 }
  );
}

export async function GET() {
  console.log("inside get");
  const res = await showAll();
  return Response.json(res);
}
