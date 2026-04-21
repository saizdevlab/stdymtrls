import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (
    username === "laxman" &&
    password === "laxman"
  ) {
    const res = NextResponse.json({ success: true });

    res.cookies.set("auth", "true", {
      httpOnly: true,
      path: "/",
    });

    return res;
  }

  return new NextResponse("Unauthorized", { status: 401 });
}