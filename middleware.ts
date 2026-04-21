import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isAuth = req.cookies.get("auth")?.value === "true";

  const isLoginPage = req.nextUrl.pathname.startsWith("/login");
  const isApi = req.nextUrl.pathname.startsWith("/api");

  if (!isAuth && !isLoginPage && !isApi) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};