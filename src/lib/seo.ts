const FALLBACK_SITE_URL = "https://www.abhisekgupta7.com.np";

function normalizeSiteUrl(input?: string): string {
  if (!input) return FALLBACK_SITE_URL;

  const withProtocol = input.startsWith("http") ? input : `https://${input}`;

  try {
    const url = new URL(withProtocol);
    return url.origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export function getSiteUrl(): string {
  return normalizeSiteUrl(
    process.env.NEXT_PUBLIC_APP_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.SITE_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      process.env.VERCEL_URL,
  );
}
