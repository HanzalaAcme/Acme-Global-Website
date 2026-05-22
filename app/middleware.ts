import { NextResponse }
from "next/server";

import type { NextRequest }
from "next/server";

import { createServerClient }
from "@supabase/ssr";

export async function middleware(
  req: NextRequest
) {

  let response =
    NextResponse.next();

  const supabase =
    createServerClient(

      process.env
        .NEXT_PUBLIC_SUPABASE_URL!,

      process.env
        .NEXT_PUBLIC_SUPABASE_ANON_KEY!,

      {
        cookies: {

          get(name: string) {

            return req.cookies.get(name)
              ?.value;
          },

          set() {},

          remove() {},
        },
      }
    );

  const {
    data: { session },
  } =
    await supabase.auth
      .getSession();

  // NOT LOGGED IN
  if (

    !session &&

    req.nextUrl.pathname
      .startsWith("/admin") &&

    req.nextUrl.pathname !==
      "/admin/login"
  ) {

    return NextResponse.redirect(

      new URL(
        "/admin/login",
        req.url
      )
    );
  }

  return response;
}

export const config = {

  matcher: ["/admin/:path*"],
};