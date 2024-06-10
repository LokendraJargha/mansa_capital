import { NextResponse } from "next/server";
import tokenSchema from "../../../../models/tokenSchema";
import bcrypt from "bcryptjs";
import User from "../../../../models/userSchema";
import { hashPassword, comparePasswords } from "../helpers/helpers";

// Define a simple compare function if tokens are not hashed
const compareTokens = (token, tokenInDb) => token === tokenInDb.token;

//this will verify the token and then puts the new password
export async function POST(req) {
  const { token, email, password } = await req.json();
  try {
    console.log("inside change password route");

    const user = await User.findOne({ email });
    console.log("accessing user", user);
    if (!user) return NextResponse.json({ message: "User not found" });

    const tokenInDb = await tokenSchema.findOne({ resetToken: token });
    console.log("accessing token", tokenInDb);
    if (!tokenInDb) return NextResponse.json({ message: "Token not found" });
    console.log("token is ", token);
    // Assuming tokens are not hashed and can be compared directly
    const isValidToken = compareTokens(token, tokenInDb);
    
    console.log("token is valid:", isValidToken);
    if (!isValidToken) return NextResponse.json({ message: "Invalid token" });
    console.log("password is ", password);
    const updatePassword = await hashPassword(password);
    console.log("changed password is", updatePassword);

    await User.findOneAndUpdate(
      { email: email },
      { password: updatePassword }
    );

    await tokenSchema.findOneAndDelete({ resetToken: token });
    return NextResponse.json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
