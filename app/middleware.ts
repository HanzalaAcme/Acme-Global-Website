import { NextResponse }
from "next/server";

import type { NextRequest }
from "next/server";

import { createServerClient }
from "@supabase/ssr";

export async function middleware(
  request: NextRequest
) {

  let response =
    NextResponse.next({

      request: {
        headers:
          request.headers,
      },
    });

  // ========================================
  // SUPABASE
  // ========================================

  const supabase =
    createServerClient(

      process.env
        .NEXT_PUBLIC_SUPABASE_URL!,

      process.env
        .NEXT_PUBLIC_SUPABASE_ANON_KEY!,

      {

        cookies: {

          getAll() {

            return request.cookies
              .getAll();
          },

          setAll(cookiesToSet) {

            cookiesToSet.forEach(

              ({
                name,
                value,
              }) =>

                request.cookies.set(
                  name,
                  value
                )
            );

            response =
              NextResponse.next({

                request,
              });

            cookiesToSet.forEach(

              ({
                name,
                value,
                options,
              }) =>

                response.cookies.set(

                  name,

                  value,

                  options
                )
            );
          },
        },
      }
    );

  // ========================================
  // SESSION
  // ========================================

  const {
    data: { session },
  } =
    await supabase.auth
      .getSession();

  // ========================================
  // ALWAYS FORCE LOGIN PAGE
  // ========================================

  if (
    request.nextUrl.pathname ===
    "/admin"
  ) {

    return NextResponse.redirect(

      new URL(
        "/admin/login",
        request.url
      )
    );
  }

  // ========================================
  // PROTECTED ROUTES
  // ========================================

  const protectedRoutes = [

    "/admin/dashboard_acme",

    "/admin/applications",

    "/admin/partners",
  ];

  const isProtected =

    protectedRoutes.some(
      (route) =>

        request.nextUrl.pathname
          .startsWith(route)
    );

  // ========================================
  // BLOCK ACCESS
  // ========================================

  if (
    isProtected &&
    !session
  ) {

    return NextResponse.redirect(

      new URL(
        "/admin/login",
        request.url
      )
    );
  }

  return response;
}

export const config = {

  matcher: [

    "/admin/:path*",
  ],
};