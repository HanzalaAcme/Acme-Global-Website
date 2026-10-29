type SiteverifyResponse = {
  success: boolean;
  hostname?: string;
};

const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstileToken(
  token: unknown,
  request: Request,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (typeof token !== "string" || !token || !secret) {
    return false;
  }

  const formData = new URLSearchParams({
    secret,
    response: token,
  });

  try {
    const response = await fetch(SITEVERIFY_URL, {
      method: "POST",
      body: formData,
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      return false;
    }

    const result = (await response.json()) as SiteverifyResponse;
    const requestHostname = new URL(request.url).hostname.toLowerCase();

    return (
      result.success === true &&
      result.hostname?.toLowerCase() === requestHostname
    );
  } catch {
    return false;
  }
}
