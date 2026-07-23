export function getWordPressApi() {
  const api = process.env.NEXT_PUBLIC_WORDPRESS_API;

  if (!api) {
    throw new Error(
      "NEXT_PUBLIC_WORDPRESS_API is missing."
    );
  }

  return api;
}

export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL;

  if (!url) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is missing."
    );
  }

  return url;
}