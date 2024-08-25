import Number from "@/components/icons/number";
import { sanitize } from "isomorphic-dompurify";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
interface CardProps {
  item: SkillItem;
  isEraser: boolean;
  total: number;
  className?: string;
}

const Card = ({ item, isEraser, total, className = "" }: CardProps) => {
  const { t } = useTranslation();
  return (
    <div
      className={twMerge(
        "w-full p-4 bg-bg-note shadow-note backdrop-filter backdrop-blur-sm bg-opacity-50 rounded-sm transition-all",
        className
      )}
    >
      <p
        className={twMerge(
          "text-center text-2xl truncate mb-4 break-all text-wrap",
          !isEraser && "animate-text-out"
        )}
      >
        {t(`skills.${item.key}.title`)}
      </p>
      <div
        className={twMerge(
          "text-tsecondary break-all text-wrap flex flex-col gap-2 content",
          !isEraser && "animate-text-out"
        )}
        dangerouslySetInnerHTML={{
          __html: sanitize(t(`skills.${item.key}.detail`)),
        }}
      ></div>
      <div className="flex justify-end gap-2 items-center mt-4">
        <span className={twMerge(!isEraser && "animate-text-out")}>
          <Number index={item.index + 1} width={16} height={16} />
        </span>

        <span className="text-ttertiary">/</span>
        <Number
          index={total}
          width={14}
          height={14}
          className="fill-tsecondary"
        />
      </div>
    </div>
  );
};

export default Card;
