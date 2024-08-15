import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Dev from "../icons/links/dev";
import Email from "../icons/links/email";
import GitHubIcon from "../icons/links/github";
import LanguageIcon from "../icons/links/language-icon";
import Resume from "../icons/links/resume";

type Cls = {
  className?: string;
};
interface IconWrapProps {
  isStickyTop: boolean;
  Icon: React.FC<Cls>;
  tooltip?: string;
}
const IconWrap = ({
  isStickyTop,
  Icon,
  tooltip = "",
  className = "",
}: IconWrapProps & Cls) => {
  return (
    <div
      data-tooltip-id="my-tooltip"
      data-tooltip-content={tooltip}
      data-tooltip-place="top"
      className={twMerge(
        "cursor-pointer transition-all",
        isStickyTop ? "w-8 sm:w-10" : "w-12 sm:w-16"
      )}
    >
      <Icon className={className} />
    </div>
  );
};
interface LinksProps {
  isStickyTop: boolean;
  className?: string;
  isBottom?: boolean;
}
const Links = ({
  isStickyTop,
  isBottom = false,
  className = "",
}: LinksProps) => {
  const [lang, setLang] = useState("en");
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  const handleLanguageChange = () => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
      timeRef.current = undefined;
    }
    timeRef.current = setTimeout(
      () =>
        setLang((v) => {
          if (v.startsWith("en")) {
            return "zh";
          } else {
            return "en";
          }
        }),
      100
    );
  };

  return (
    <div className={twMerge("flex gap-2 items-center", className)}>
      <IconWrap isStickyTop={isStickyTop} Icon={Resume} tooltip="resume" />
      <IconWrap isStickyTop={isStickyTop} Icon={Email} tooltip="email" />
      <IconWrap isStickyTop={isStickyTop} Icon={GitHubIcon} tooltip="github" />
      <IconWrap isStickyTop={isStickyTop} Icon={Dev} tooltip="dev" />
      {!isBottom && (
        <IconWrap
          isStickyTop={isStickyTop}
          Icon={LanguageIcon}
          tooltip="language"
        />
      )}
    </div>
  );
};

export default Links;
