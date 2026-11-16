import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const sitekey = process.env.TURNSTILE_SITE_KEY;
  if (!sitekey) {
    return NextResponse.json(
      { message: "Turnstile is not configured." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  return NextResponse.json(
    { sitekey },
    { headers: { "Cache-Control": "no-store" } },
  );
}
