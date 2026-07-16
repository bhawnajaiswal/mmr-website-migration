import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Appointment Request Received:", body);

    // Replicate database saving or email notifications placeholder
    return NextResponse.json({
      success: true,
      message: "Appointment request received successfully."
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }
}
