import { NextResponse }
from "next/server";

import type { NextRequest }
from "next/server";

import { createServerClient }
from "@supabase/ssr";

export async function middleware(
  request: NextRequest
) {

  // ========================================
  // ALWAYS REDIRECT /admin
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
  // GET SESSION
  // ========================================

  const {
    data: { session },
  } =
    await supabase.auth
      .getSession();

  // ========================================
  // PROTECTED ROUTES
  // ========================================

  const protectedRoutes = [

    "/admin/dashboard",

    "/admin/applications",

    "/admin/partners",
  ];

  const isProtectedRoute =

    protectedRoutes.some(
      (route) =>

        request.nextUrl.pathname
          .startsWith(route)
    );

  // ========================================
  // NOT LOGGED IN
  // ========================================

  if (
    isProtectedRoute &&
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