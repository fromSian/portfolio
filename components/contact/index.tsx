import { email_url } from "@/common/links";
import { useTranslation } from "@/i18n/server";
import { Lng } from "@/types/global";
import Links from "../header/links";

const Contact = async ({ lng }: Lng) => {
  const { t } = await useTranslation(lng);
  return (
    <div className="px-4 flex flex-col items-center gap-4 relative">
      <a
        href={email_url}
        className="py-2 px-12 button-line transition-all tracking-wider"
      >
        {t("contact")}
      </a>
      <Links isStickyTop={true} isBottom={true} lng={lng} />
    </div>
  );
};

export default Contact;
