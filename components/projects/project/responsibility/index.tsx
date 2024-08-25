import { useTranslation } from "@/i18n/server";
import { Lng } from "@/types/global";
import ResponsibilityItem from "./item";

interface ResponsibilityProps {
  roles: string[];
  dataKey: string;
  isHideNumber?: boolean;
}

const Responsibility = async ({
  roles,
  dataKey,
  lng,
  isHideNumber = false,
}: ResponsibilityProps & Lng) => {
  const { t } = await useTranslation(lng);
  return (
    <>
      <div className="flex flex-col gap-4 flex-1">
        <p className="uppercase mb-2  text-ttertiary text-lg font-bold">
          {t(`projects.responsibility`)}
        </p>
        {roles.map((item, index) => (
          <ResponsibilityItem
            index={index}
            name={t(`projects.${dataKey}.roles.${item}.name`)}
            detail={t(`projects.${dataKey}.roles.${item}.detail`)}
            key={`responsibility-${index}`}
            isHideNumber={isHideNumber}
          />
        ))}
      </div>
    </>
  );
};

export default Responsibility;
