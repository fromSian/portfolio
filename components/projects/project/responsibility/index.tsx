import { useTranslation } from "react-i18next";
import ResponsibilityItem from "./item";

interface ResponsibilityProps {
  roles: string[];
  dataKey: string;
  isHideNumber?: boolean;
}

const Responsibility = ({
  roles,
  dataKey,
  isHideNumber = false,
}: ResponsibilityProps) => {
  const { t } = useTranslation();
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
