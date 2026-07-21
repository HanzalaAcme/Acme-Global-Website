export const WP_API = process.env.NEXT_PUBLIC_WORDPRESS_API;
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;


if (!WP_API) {
  throw new Error(
    "NEXT_PUBLIC_WORDPRESS_API is missing. Please check your .env.local file."
  );
}

if (!SITE_URL) {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL is missing. Please check your .env.local file."
  );
}