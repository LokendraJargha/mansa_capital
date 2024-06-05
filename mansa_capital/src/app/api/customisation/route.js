import { insert, showAll } from "../controllers/customisationController";
export async function POST(req) {
  const data = await req.json();
  console.log("inside post");
  const newData = {
    screen_mode: data.screenMode,
    base_timezone: data.baseTimezone,
    created_by: data.createdBy,
    base_currency: data.baseCurrency,
    date_format: data.dateFormat,
    language: data.language,
    font_size: data.fontSize,
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
  console.log("inside get");
  const res = await showAll();
  return Response.json(res);
}
