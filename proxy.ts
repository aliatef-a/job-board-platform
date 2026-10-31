import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase();
  const url = request.nextUrl;
  const pathname = url.pathname;

  console.log("Host:", host);
  console.log("Pathname:", pathname);

  // rule: check if the host is admin and if the path is /dashboard
  if (host.includes("admin") && pathname !== "/dashboard") {
    console.log(
      "Redirecting to /dashboard because host is admin and path is not /dashboard",
    );
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  //   rule: check if he client is trying to access the /dashboard route and if the host is not admin
  if (pathname.includes("/dashboard") && !host.includes("admin")) {
    console.log(
      "Redirecting to /not-authorized because client is trying to access /dashboard without admin privileges",
    );
    return NextResponse.redirect(new URL("/not-authorized", request.url));
  }

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: [
    "/((?!api(?:/|$)|_next/static(?:/|$)|_next/image(?:/|$)|.*\\.png$).*)",
  ],
};
