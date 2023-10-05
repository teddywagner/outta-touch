import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log(req);

  return NextResponse.json({
    status: 200,
    message: "Message sent successfully.",
  });
}

export async function GET() {
  return NextResponse.json({
    status: 200,
    message: "Message sent successfully.",
  });
}
