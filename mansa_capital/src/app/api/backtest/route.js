import { insert, showAll } from "../controllers/backtestController";
export async function POST(req) {
  const data = await req.json();
  const newData = {
    balance_in_usd: data.accountBalance,
    pairs: data.pairs,
    start_date: data.startDate,
    end_date: data.endDate,
    strategy: data.strategy,
    session_name: data.sessionName,
    description: data.description,
  };
  const custom = await insert(newData);

  if (custom) {
    return Response.json({ message: "Customisation data added Successfully" });
  }
  return Response.json(
    { message: "Customisation creation failed" },
    { status: 500 }
  );
}

export async function GET() {
  const res = await showAll();
  return Response.json(res);
}
