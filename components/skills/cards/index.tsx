import Eraser from "@/components/icons/eraser";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import Card from "./card";

interface CardProps {
  total: number;
}

const Cards = forwardRef(({ total }: CardProps, ref) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(200);
  const [isEraser, setIsEraser] = useState(false);
  const [width, setWidth] = useState(10);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();
  const [item, setItem] = useState<SkillItem>();

  useImperativeHandle(
    ref,
    () => {
      return {
        setInitialData: (_item: SkillItem) => {
          setItem(_item);
        },
        handleEraser: (_item: SkillItem) => {
          if (timeRef.current) {
            return;
          }
          setIsEraser(true);
          timeRef.current = setTimeout(() => {
            setItem(_item);
            setIsEraser(false);
            timeRef.current = undefined;
          }, 1125);
        },
      };
    },
    []
  );

  useEffect(() => {
    if (!parentRef.current) {
      return;
    }
    setWidth(parentRef.current.clientWidth);
    setHeight(parentRef.current.clientHeight);
  }, [item]);

  return (
    <>
      <div
        className="flex-1 transition-all hidden sm:block sticky top-24"
        ref={parentRef}
      >
        {item && (
          <Card
            className={twMerge("")}
            item={item}
            isEraser={isEraser}
            total={total}
          />
        )}

        <div className={twMerge("absolute top-0 left-0 w-full h-full")}>
          {isEraser && <Eraser width={width} height={height} />}
        </div>
      </div>
    </>
  );
});

export default Cards;
