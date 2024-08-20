import { sanitize } from "dompurify";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
interface ListProps {
  data: SkillItem[];
  handleClick: (item: SkillItem) => void;
  activeKey: string;
}

const List = ({ data, handleClick, activeKey }: ListProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-6 flex-col h-full justify-center flex-1">
      {data.map((item, index) => {
        return (
          <div
            key={`skills-${index}`}
            className="group flex gap-4 cursor-pointer pointer-events-none sm:pointer-events-auto items-center"
            onClick={() => handleClick(item)}
          >
            <div className="flex-shrink-0 group-active:scale-90 transition-all">
              <item.Icon />
            </div>
            <div>
              <p
                className={twMerge(
                  "text-lg font-bold leading-8",
                  activeKey === item.key && "sm:text-thighlight"
                )}
              >
                {t(`skills.${item.key}.title`)}
              </p>
              <div
                className="flex sm:hidden text-ttertiary flex-col gap-1 "
                dangerouslySetInnerHTML={{
                  __html: sanitize(t(`skills.${item.key}.detail`)),
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
