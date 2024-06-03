// middleware.js
import { NextResponse } from 'next/server';



export function middleware(req) {
  // Example: Basic authentication check
  const userAuthenticated  = true;
  if (userAuthenticated) {
    return NextResponse.next();
  } else {  
    return new NextResponse('Unauthorized', { status: 401 });
  }
}

export const config = {
    matcher: ['/user/:path*'],
}