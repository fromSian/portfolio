import { Suspense, lazy } from "react";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import "./i18n";
import Loading from "./loading";
const Main = lazy(() => import("./main"));
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={twMerge("pb-4")}>
        <Suspense fallback={<Loading />}>
          <Main>{children}</Main>
        </Suspense>
      </body>
    </html>
  );
}
