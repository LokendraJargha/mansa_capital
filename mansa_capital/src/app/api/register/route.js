import { Register } from "../controllers/authController";
export async function POST(req) {
  const data = await req.json();
  console.log("data is ------------------------------", data);

  const newData = {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    password: data.password,
  };

  const user = await Register(newData);

  if (user) {
    return Response.json({ message: "User Created Successfully" });
  }
}
