"use server"
import { NextResponse,NextRequest } from 'next/server';
import { jwtVerify } from 'jose';


export async function middleware(req) {
  // Example: Basic authentication check
  const token= req?.headers?.get('Authorization')?.split("Bearer ")[1]
  console.log("token",token)
  if(token){
  
    const isValid=await verifyToken(token,process.env.JWT_SECRET) 
    if(isValid){
      return NextResponse.next();
    }
  }
    return new NextResponse('Unauthorized', { status: 401 });
}

export const config = {
    matcher: ["/api/trade"],
}

const verifyToken = async (token,secret_key) => {
  const secret = new TextEncoder().encode(secret_key);

  try {
    const verified = await jwtVerify(token,secret);
    return verified.payload;
  } catch (error) {
    console.error('JWT verification error:', error);
    return null;
  }
};
