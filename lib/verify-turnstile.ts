const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type SiteverifyResponse = {
  success: boolean;
  hostname?: string;
};

export async function verifyTurnstileToken(
  token: FormDataEntryValue | string | null | undefined,
  request: Request,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (typeof token !== "string" || !token || !secret) return false;

  const formData = new FormData();
  formData.set("secret", secret);
  formData.set("response", token);

  const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (clientIp) formData.set("remoteip", clientIp);

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      body: formData,
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return false;

    const result = (await response.json()) as SiteverifyResponse;
    if (!result.success) return false;

    if (process.env.NODE_ENV === "production") {
      return result.hostname === "acmeglobal.tech" || result.hostname === "www.acmeglobal.tech";
    }

    return true;
  } catch {
    return false;
  }
}
