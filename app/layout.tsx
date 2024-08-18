import { twMerge } from "tailwind-merge";
import "./globals.css";
import "./i18n";
import Main from "./main";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={twMerge("pb-4")}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
