"use client";

import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

const headers = ["position", "company", "duration", "description"];
const dataKeys = ["geoscene", "chengan"];
interface ProjectsProps {
  className?: string;
}

const Experiences = ({ className = "" }: ProjectsProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className={twMerge("hidden md:flex flex-col gap-6 w-full", className)}
      >
        {Array.from({ length: dataKeys.length + 1 }).map((_, index) => (
          <div
            key={`experiences-${index}`}
            className={twMerge(
              "flex py-2 rounded-md items-center justify-between w-full overflow-hidden",
              index === 0
                ? "bg-table-header-background text-table-header-foreground font-extrabold shadow-none mb-2"
                : "bg-foreground shadow-note"
            )}
          >
            {headers.map((v, i) =>
              index && i === headers.length - 1 && "text-left" ? (
                <div
                  className={twMerge(
                    "text-wrap break-all p-2 flex-1 text-left flex flex-col gap-2"
                  )}
                  key={`experience-${index}-${i}`}
                  dangerouslySetInnerHTML={{
                    __html: t(`experiences.${dataKeys[index - 1]}.${v}`),
                  }}
                />
              ) : (
                <div
                  key={`experience-${index}-${i}`}
                  className={twMerge(
                    "text-wrap break-all p-2 w-[15%] text-center",
                    i === headers.length - 1 && "text-left flex-1"
                  )}
                >
                  {index
                    ? t(`experiences.${dataKeys[index - 1]}.${v}`)
                    : t(`experiences.header.${v}`)}
                </div>
              )
            )}
          </div>
        ))}
      </div>

      <div className={twMerge("flex flex-col gap-4 md:hidden")}>
        {dataKeys.map((key) => (
          <div
            className="border-2 p-2 sm:p-4 border-ttertiary rounded-sm"
            key={`experience-${key}`}
          >
            <div className="flex flex-col sm:flex-row gap-2 justify-between mb-2 sm:items-center">
              <p className="flex gap-2 items-center">
                <span className="text-xl font-bold">
                  {t(`experiences.${key}.position`)}
                </span>
                <span className="text-ttertiary">
                  {t(`experiences.${key}.duration`)}
                </span>
              </p>
              <p className="text-tsecondary italic text-sm">
                {t(`experiences.${key}.company`)}
              </p>
            </div>
            <div
              className={twMerge(
                "text-wrap break-all p-2 flex-1 text-left flex flex-col gap-2"
              )}
              dangerouslySetInnerHTML={{
                __html: t(`experiences.${key}.description`),
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Experiences;
