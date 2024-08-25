import { cookieName, fallbackLng, languages } from "@/i18n/settings";
import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest|images).*)",
  ],
};

export function middleware(req: NextRequest) {
  let lng;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  const splits = req.nextUrl.pathname.split("/");
  const inputLng = splits.length > 1 ? splits[1] : splits[0];
  const headers = new Headers(req.headers);

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => loc === inputLng) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    if (inputLng.toLocaleLowerCase().startsWith("en")) {
      lng = "en";
      headers.set("x-current-lng", lng);
      return NextResponse.redirect(
        new URL(
          `/${lng}${req.nextUrl.pathname.replace(`/${inputLng}`, "")}`,
          req.url
        ),
        { headers }
      );
    } else if (inputLng.toLocaleLowerCase().startsWith("zh")) {
      lng = "zh";
      headers.set("x-current-lng", lng);
      return NextResponse.redirect(
        new URL(
          `/${lng}${req.nextUrl.pathname.replace(`/${inputLng}`, "")}`,
          req.url
        ),
        { headers }
      );
    } else {
      headers.set("x-current-lng", lng);
      return NextResponse.redirect(
        new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
        { headers }
      );
    }
  }
  headers.set("x-current-lng", lng);

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") || "");
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next({ headers });
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
