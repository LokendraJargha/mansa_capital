import connectDB from "../../../../config/database";
export async function GET() {
  const data = { "hell world": "hello world" };
  connectDB();
  return Response.json(data);
}
