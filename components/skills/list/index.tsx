import Database from "@/components/icons/database";
import Django from "@/components/icons/django";
import HtmlIcon from "@/components/icons/html-icon";
import MoreIcon from "@/components/icons/more";
import NextIcon from "@/components/icons/next-icon";
import ReactIcon from "@/components/icons/react";
import TailwindIcon from "@/components/icons/tailwind-icon";
import TypeScriptIcon from "@/components/icons/typescript-icon";

const items = [
  "react",
  "django",
  "typescript",
  "database",
  "next",
  "tailwindcss",
  "html",
  "more",
];
const Icons = {
  react: ReactIcon,
  django: Django,
  typescript: TypeScriptIcon,
  database: Database,
  next: NextIcon,
  tailwindcss: TailwindIcon,
  html: HtmlIcon,
  more: MoreIcon,
};

const List = () => {
  return (
    <div className="flex gap-4 flex-col h-full justify-center">
      {Object.keys(Icons).map((key) => {
        const Icon = Icons[key];
        return (
          <div className="flex gap-4 items-center">
            <Icon />
            <p>{key}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
