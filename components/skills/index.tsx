import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Cards from "./cards";
import List from "./list";
interface SkillProps {
  className: string;
}

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

const Skills = ({ className = "" }: SkillProps) => {
  const [activeKey, setActiveKey] = useState("");
  const [data, setData] = useState<SkillItem[]>([]);
  const cardsRef = useRef();

  useEffect(() => {
    const getOneIconComponent = async (key: string) => {
      try {
        const Icon = await import(`@/components/icons/skills/${key}-icon.tsx`);
        return Icon.default;
      } catch (err) {
        const Computer = await import(
          `@/components/icons/skills/computer-icon`
        );
        return Computer.default;
      }
    };

    const getIconComponents = async () => {
      const _data = await Promise.all(
        items.map(async (item, index) => ({
          index: index,
          key: item,
          title: `${item} klswrwklekfnslkjfpweirjwe klswrwklekfnslkjfpweirjwe klswrwklekfnslkjfpweirjwe klswrwklekfnslkjfpweirjwe klswrwklekfnslkjfpweirjwe klswrwklekfnslkjfpweirjwe`,
          Icon: await getOneIconComponent(item),
          description:
            "I want to be able to able to change my idea about the word",
        }))
      );
      setData(_data);
      setActiveKey(_data[0].key);
      console.log(_data[0]);
      cardsRef.current?.setInitialData(_data[0]);
    };
    getIconComponents();
  }, []);

  const handleClick = (item: SkillItem) => {
    setActiveKey(item.key);
    cardsRef.current?.handleEraser(item);
  };

  return (
    <div
      className={twMerge(
        "flex justify-between gap-4 flex-col sm:flex-row w-full items-start",
        className
      )}
    >
      <List
        data={data}
        handleClick={handleClick}
        activeKey={activeKey}
        setActiveKey={setActiveKey}
      />
      <Cards ref={cardsRef} total={data.length} />
    </div>
  );
};

export default Skills;
