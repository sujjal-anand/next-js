"use server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("first")
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`Failed to fetch users, status: ${response.status}`);
    }

    const users = await response.json(); // ✅ Parse JSON response

    console.log(users, "Fetched Users");
    return NextResponse.json(users); // ✅ Return the parsed data
  } catch (error: any) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
