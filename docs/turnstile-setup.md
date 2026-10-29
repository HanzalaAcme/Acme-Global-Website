# Cloudflare Turnstile setup

Turnstile is enabled on the public Contact, Careers, and Partner forms. Cloud requirement forms are intentionally excluded. The existing database and email steps run only after the server verifies the Turnstile token.

## Cloudflare setup

1. In Cloudflare, create a Turnstile widget for the production hostnames `acmeglobal.tech` and `www.acmeglobal.tech`.
2. Choose **Managed** mode. Cloudflare may verify low-risk visitors automatically and show an interactive checkbox only when it decides one is needed.
3. Add development hostnames such as `localhost` to a separate development widget, if local form testing is needed.
4. Copy the site's public key and private secret key.

## Environment variables

Set these locally in the ignored `.env.local` file and in the production app environment:

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-site-key
TURNSTILE_SECRET_KEY=your-secret-key
```

The secret key must remain server-side. Never expose it through a `NEXT_PUBLIC_` variable or commit it to Git. Forms fail closed if the keys are missing or token verification fails. The production secret must be added by someone with hosting environment access before deployment.

The site's Content Security Policy must allow `https://challenges.cloudflare.com` for scripts, frames, and connections. This repo's CSP is report-only and already allows HTTPS origins; the explicit Turnstile origin is included for clarity.
