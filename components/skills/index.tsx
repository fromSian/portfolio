import { twMerge } from "tailwind-merge";
import Cards from "./cards";
import List from "./list";

interface SkillProps {
  className: string;
}

// 輪播 但是可以點擊 右邊用便利貼
const Skills = ({ className = "" }: SkillProps) => {
  return (
    <div
      className={twMerge("flex justify-between gap-4 items-center", className)}
    >
      <List />
      <Cards />
    </div>
  );
};

export default Skills;
