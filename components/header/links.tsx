"use client";

import { dev_url, email_url, github_url, resume_url } from "@/common/links";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import Dev from "../icons/links/dev";
import Email from "../icons/links/email";
import GitHubIcon from "../icons/links/github";
import LanguageIcon from "../icons/links/language-icon";
import Resume from "../icons/links/resume";
import LightIcon from "../icons/theme/light";

type Cls = {
  className?: string;
};
type Theme = {
  theme?: ThemeStatus;
};
interface IconWrapProps {
  isStickyTop: boolean;
  Icon: React.FC<Theme> | React.FC<Cls>;
  onClick: () => void;
  tooltip?: string;
  isBottom?: boolean;
}
const IconWrap = ({
  isStickyTop,
  Icon,
  onClick,
  isBottom,
  tooltip = "",
  ...rest
}: IconWrapProps & Cls & Theme) => {
  return (
    <div
      onClick={onClick}
      data-tooltip-id="my-tooltip"
      data-tooltip-content={tooltip}
      data-tooltip-place="top"
      className={twMerge(
        "cursor-pointer transition-all",
        isStickyTop ? "w-6 sm:w-8 lg:w-10" : "w-8 sm:w-10 lg:w-12",
        !isBottom && "last:-ml-2"
      )}
    >
      <Icon {...rest} />
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
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  const [mounted, setMounted] = useState(false);

  const handleLanguageChange = () => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
      timeRef.current = undefined;
    }
    timeRef.current = setTimeout(() => {
      i18n.changeLanguage(
        i18n.resolvedLanguage?.startsWith("en") ? "zh" : "en"
      );
    }, 100);
  };

  const handleThemeChange = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  const handleOpen = (url: string) => {
    window.open(url);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className={twMerge("flex gap-2 items-center", className)}>
      <IconWrap
        isStickyTop={isStickyTop}
        Icon={Resume}
        tooltip="resume"
        onClick={() => handleOpen(resume_url)}
        isBottom={isBottom}
      />
      <IconWrap
        isStickyTop={isStickyTop}
        Icon={Email}
        tooltip="email"
        isBottom={isBottom}
        onClick={() => handleOpen(email_url)}
      />
      <IconWrap
        isStickyTop={isStickyTop}
        Icon={GitHubIcon}
        tooltip="github"
        onClick={() => handleOpen(github_url)}
        isBottom={isBottom}
      />
      <IconWrap
        isStickyTop={isStickyTop}
        Icon={Dev}
        tooltip="dev"
        onClick={() => handleOpen(dev_url)}
        isBottom={isBottom}
      />
      {!isBottom && (
        <>
          <IconWrap
            onClick={handleLanguageChange}
            isStickyTop={isStickyTop}
            Icon={LanguageIcon}
            tooltip={i18n.resolvedLanguage}
            isBottom={isBottom}
          />
          <IconWrap
            isStickyTop={isStickyTop}
            Icon={LightIcon}
            tooltip={theme}
            onClick={handleThemeChange}
            isBottom={isBottom}
            theme={theme as ThemeStatus}
          />
        </>
      )}
    </div>
  );
};

export default Links;
