import Contact from "@/components/contact";
import Header from "@/components/header";
import ScrollTop from "@/components/utils/scroll-top";
import { useTranslation } from "@/i18n/server";
import { Lng } from "@/types/global";
import { ReactNode } from "react";
const Main = async ({ children, lng }: { children: ReactNode } & Lng) => {
  const { t } = await useTranslation(lng);
  return (
    <>
      <Header lng={lng} />
      {children}
      <Contact lng={lng} />
      <ScrollTop />
    </>
  );
};

export default Main;
