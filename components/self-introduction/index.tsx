import { sanitize } from "dompurify";
import { useTranslation } from "react-i18next";
const SelfIntroduction = () => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-2 sm:gap-4 p-2 sm:p-4 text-lg flex-col sm:flex-row items-center sm:items-start">
      <p className="text-3xl font-bold italic text-ttertiary text-nowrap">
        {t("position")}
      </p>
      <div
        className="text-tsecondary leading-relaxed flex flex-col gap-2 tracking-wider content"
        dangerouslySetInnerHTML={{
          __html: sanitize(t("description")),
        }}
      ></div>
    </div>
  );
};

export default SelfIntroduction;
