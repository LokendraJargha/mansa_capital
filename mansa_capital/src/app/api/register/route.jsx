import connectDB from "../../../../config/database";
import userSchema from "../../../../models/userSchema";
import bcrypt from "bcryptjs";
export async function GET() {
  const data = { "hell world": "hello world" };
  connectDB();
  return Response.json(data);
}


export async function POST(req) {
  connectDB()
  const data = await req.json() //this gives all the post req json data
  try {
    const user = await userSchema.create({ ...data, password: await hashPassword(data.password) });
    console.log(user)
    return Response.json({ "message": "User created successfully" });
  }
  catch (err) {
    console.log(err)
    return Response.status(400).json({
      error: err.message
    })
  }

}
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}