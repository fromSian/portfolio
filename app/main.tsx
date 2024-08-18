"use client";
import Contact from "@/components/contact";
import Header from "@/components/header";
import ScrollTop from "@/components/utils/scroll-top";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
const Main = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <ThemeProvider attribute="class">
        <Header />
        {children}
        <Contact />
        <ScrollTop />
      </ThemeProvider>
    </>
  );
};

export default Main;
