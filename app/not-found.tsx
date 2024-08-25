import AnimatedLink from "@/components/utils/animate-link";
import { useTranslation } from "@/i18n/server";
import { headers } from "next/headers";

const NotFounded = async () => {
  const headerList = headers();
  const lng = headerList.get("x-current-lng") || "zh";
  const { t } = await useTranslation(lng);
  return (
    <div className="flex flex-col items-center justify-center mt-[10%] mb-8 px-2 sm:px-4">
      <p className="text-3xl font-bold mb-4">{t("not-found")}</p>
      <AnimatedLink href="/">
        <button className="py-2 px-8 border rounded-full bg-light-foreground text-light-background hover:bg-light-background hover:text-light-foreground">
          {t("home")}
        </button>
      </AnimatedLink>
    </div>
  );
};

export default NotFounded;
