import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

interface ListProps {
  data: SkillItem[];
  handleClick: (item: SkillItem) => void;
  activeKey: string;
  setActiveKey: Dispatch<SetStateAction<string>>;
}

const List = ({ data, handleClick, activeKey, setActiveKey }: ListProps) => {
  return (
    <div className="flex gap-4 flex-col h-full justify-center flex-1">
      {data.map((item) => {
        return (
          <div
            className="group flex gap-4 cursor-pointer items-start pointer-events-none sm:pointer-events-auto"
            onClick={() => handleClick(item)}
          >
            <div className="flex-shrink-0 group-hover:shadow-note group-active:scale-90 transition-all">
              <item.Icon />
            </div>
            <div>
              <p
                className={twMerge(
                  "text-lg font-bold",
                  activeKey === item.key && "sm:text-thighlight"
                )}
              >
                {item.title}
              </p>
              <p className="block sm:hidden italic text-ttertiary">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
