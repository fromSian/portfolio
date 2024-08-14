import { useRef, useState } from "react";
import Dev from "../icons/dev";
import Email from "../icons/email";
import GitHubIcon from "../icons/github";
import LanguageIcon from "../icons/language-icon";
import Resume from "../icons/resume";

interface LinksProps {
  isStickyTop: boolean;
}
const Links = ({ isStickyTop }: LinksProps) => {
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
    <div className="flex gap-2 items-center">
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="resume document"
        data-tooltip-place="bottom"
      >
        <Resume
          width={isStickyTop ? 32 : 56}
          height={isStickyTop ? 32 : 56}
          className="transition-all cursor-pointer"
        />
      </a>
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="email"
        data-tooltip-place="bottom"
      >
        <Email
          width={isStickyTop ? 32 : 56}
          height={isStickyTop ? 32 : 56}
          className="transition-all cursor-pointer"
        />
      </a>
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="GitHub"
        data-tooltip-place="bottom"
      >
        <GitHubIcon
          width={isStickyTop ? 36 : 64}
          height={isStickyTop ? 36 : 64}
          className="transition-all cursor-pointer"
        />
      </a>
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="dev.io community"
        data-tooltip-place="bottom"
      >
        <Dev
          width={isStickyTop ? 32 : 56}
          height={isStickyTop ? 32 : 56}
          className="transition-all cursor-pointer"
        />
      </a>
      <div
        data-tooltip-id="my-tooltip"
        data-tooltip-content={lang}
        data-tooltip-place="bottom"
        onClick={handleLanguageChange}
      >
        <LanguageIcon
          width={isStickyTop ? 32 : 56}
          height={isStickyTop ? 32 : 56}
          className="transition-all cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Links;
