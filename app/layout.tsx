import { ThemeProvider } from "next-themes";
import { twMerge } from "tailwind-merge";
import "./globals.css";

export async function generateStaticParams() {
  return [{ lng: "en" }, { lng: "zh" }];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={twMerge("pb-4")}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
