import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  // console.log({ session });
  console.log("SE EJECUTA EL MIDDLEWARE CON : ", { session });
  if (!session) {
    const url = req.nextUrl.clone();
    url.pathname = `/login`;

    return NextResponse.redirect(url);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/home/:path*"],
};
