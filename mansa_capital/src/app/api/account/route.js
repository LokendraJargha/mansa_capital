import { getById, insert, showAll } from "../controllers/accountController";
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

// export async function GET_all() {
//   console.log("inside get");
//   const res = await showAll();
//   return Response.json(res);
// }

export async function GET(request, context) {
  try {
    const { searchParams } = new URL(request.url);
    
    const createdBy = searchParams.get('created_by');

    if (!createdBy) {
      return NextResponse.json({ error: 'Missing "created_by" query parameter' }, { status: 400 });
    }

    const accountData = await getById(createdBy);
    console.log("accountData is ",accountData);
    
    if (!accountData || accountData.length === 0) {
      return Response.json({ error: 'No accounts found for the provided email' }, { status: 404 });
    }

    return Response.json(accountData);
  } catch (error) {
    console.error('Error fetching Account data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}