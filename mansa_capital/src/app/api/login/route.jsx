import { NextResponse } from "next/server";
import { Login } from "../controllers/authController";
import { jwtEncrypt, SignJWT } from "jose";
export async function POST(req) {
  const data = await req.json();
  const user = await Login(data);
  if (user) {
    const token = await createToken(user, process.env.JWT_SECRET, "1h");
    console.log("token is ", token);
    return NextResponse.json({ token, user });
  } else {
    return NextResponse.json("Login failed", { status: 401 });
  }
}

const createToken = async (user, secret_key, exp) => {
  const secret = new TextEncoder().encode(secret_key);
  const jwt = await new SignJWT(user)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(exp)
    .sign(secret);
  return jwt;
};
