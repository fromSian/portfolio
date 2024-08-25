import { useTranslation } from "@/i18n/server";
import { sanitize } from "isomorphic-dompurify";

const SelfIntroduction = async () => {
  const { t } = await useTranslation("zh");

  return (
    <div className="flex gap-2 sm:gap-4 p-2 sm:p-4 text-lg flex-col md:flex-row items-center md:items-start">
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
