import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // Get token from cookies
  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next(); // Allow request to continue
}

// Apply middleware only to protected routes
export const config = {
    matcher: ["/customers"], // Protects /customers and all its subroutes
};
