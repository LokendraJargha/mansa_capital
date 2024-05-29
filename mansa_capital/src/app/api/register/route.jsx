import { Register } from "../controllers/authController"
export async function POST(req) {
  const data = await req.json()
  console.log("data is ------------------------------", data)
  const user = await Register(data)
  if (user) {
    return Response.json({ message: "User Created Successfully" })
  }
}