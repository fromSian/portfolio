import { skillKeys } from "@/data/skills";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Cards from "./cards";
import List from "./list";
interface SkillProps {
  className: string;
}

const Skills = ({ className = "" }: SkillProps) => {
  const [activeKey, setActiveKey] = useState("");
  const [data, setData] = useState<SkillItem[]>([]);
  const cardsRef = useRef<CardsProps>();
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

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
        skillKeys.map(async (item, index) => ({
          index: index,
          key: item,
          Icon: await getOneIconComponent(item),
        }))
      );
      setData(_data);
      setActiveKey(_data[0].key);
      cardsRef.current?.setInitialData(_data[0]);
    };
    getIconComponents();
  }, []);

  const handleClick = (item: SkillItem) => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
      timeRef.current = undefined;
    }
    timeRef.current = setTimeout(() => {
      setActiveKey(item.key);
      cardsRef.current?.handleEraser(item);
    }, 100);
  };

  return (
    <div
      className={twMerge(
        "flex justify-between gap-4 flex-col sm:flex-row w-full items-start",
        className
      )}
    >
      <List data={data} handleClick={handleClick} activeKey={activeKey} />
      <Cards ref={cardsRef} total={data.length} />
    </div>
  );
};

export default Skills;
