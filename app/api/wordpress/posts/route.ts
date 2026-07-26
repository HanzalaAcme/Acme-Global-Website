import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.toString();

  const api = process.env.NEXT_PUBLIC_WORDPRESS_API;

  if (!api) {
    return NextResponse.json(
      { error: "WordPress API missing" },
      { status: 500 }
    );
  }

  const wpResponse = await fetch(`${api}/posts?${query}`, {
    cache: "no-store",
  });

  const data = await wpResponse.json();

  return NextResponse.json(data, {
    headers: {
      "X-WP-TotalPages":
        wpResponse.headers.get("X-WP-TotalPages") ?? "1",
    },
  });
}