import { NextResponse } from "next/server";
import {ChangePassword} from "../controllers/authController";

export async function POST(req) {
  console.log("inside change password route");
    const data = await req.json();

    const user = await ChangePassword(data);
    if (user) {
        
      return NextResponse.json( "Password Changed", user );
    } else {
      return NextResponse.json("Change Password failed", { status: 401 });
    }
  }