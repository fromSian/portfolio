import { email_url } from "@/common/links";
import { useTranslation } from "react-i18next";
import Links from "../header/links";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4 flex flex-col items-center gap-4 relative">
      <a
        href={email_url}
        className="py-2 px-12 button-line transition-all tracking-wider"
      >
        {t("contact")}
      </a>
      <Links isStickyTop={true} isBottom={true} />
    </div>
  );
};

export default Contact;
