"use client";
import AnimatedLink from "@/components/utils/animate-link";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

const indexs: Record<number, number[][]> = {
  0: [
    [0.6, 1.2],
    [-0.6, 1.2],
    [-0.6, -1.2],
    [0.6, -1.2],
    [1.2, 0.6, 0, 0],
  ],
  1: [
    [-1.2, 0.6],
    [1.2, 0.6],
    [1.2, -0.6],
    [-1.2, -0.6],
    [0.6, -1.2, 0, 0],
  ],
  2: [
    [-0.6, -1.2],
    [0.6, -1.2],
    [0.6, 1.2],
    [-0.6, 1.2],
    [-1.2, -0.6, 0, 0],
  ],
  3: [
    [1.2, -0.6],
    [-1.2, -0.6],
    [-1.2, 0.6],
    [1.2, 0.6],
    [-0.6, 1.2, 0, 0],
  ],
  4: [
    [0.6, -0.6],
    [-0.6, 0.6],
    [0.6, -0.6],
    [-0.6, 0.6],
    [-0.6, -0.6, 1.2, 1.2],
  ],
};

const origin = [
  {
    top: 0,
    left: 0,
    bottom: undefined,
    right: undefined,
    width: 70,
    height: 30,
    borderRight: 0,
  },
  {
    top: 0,
    left: undefined,
    bottom: undefined,
    right: 0,
    width: 30,
    height: 70,
    borderBottom: 0,
  },
  {
    top: undefined,
    left: undefined,
    bottom: 0,
    right: 0,
    width: 70,
    height: 30,
    borderLeft: 0,
  },
  {
    top: undefined,
    left: 0,
    bottom: 0,
    right: undefined,
    width: 30,
    height: 70,
    borderTop: 0,
  },
  {
    top: 30,
    left: 30,
    bottom: undefined,
    right: undefined,
    width: 40,
    height: 40,
  },
];
interface MoreProps {
  keys: string[];
}
const More = ({ keys }: MoreProps) => {
  const [styleInfos, setStyleInfos] = useState<StyleInfo[]>(origin);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();
  const { t } = useTranslation();

  const handleSizeChange = (index: number) => {
    setStyleInfos((v) => {
      const transform = indexs[index];
      const _v = origin.map((item, i) => {
        const _trans = transform[i];
        return i === origin.length - 1
          ? {
              ...item,
              top: item.top ? item.top + _trans[0] * 10 : item.top,
              left: item.left ? item.left + _trans[1] * 10 : item.left,
              width: item.width + _trans[2] * 10,
              height: item.height + _trans[3] * 10,
            }
          : {
              ...item,
              width: item.width + _trans[0] * 10,
              height: item.height + _trans[1] * 10,
            };
      });
      return _v;
    });
  };
  const handleHover = (index: number) => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
      timeRef.current = undefined;
    }
    timeRef.current = setTimeout(() => {
      handleSizeChange(index);
    }, 100);
  };

  return (
    <div className="mb-12">
      <div className="divider my-8"></div>
      <p className="text-2xl font-bold text-ttertiary text-center mb-4 uppercase">
        {t("projects.more")}
      </p>
      <div
        className="hidden md:block relative w-[80%] xl:w-[60%] ml-[10%] xl:ml-[20%] h-96"
        onMouseOut={() => {
          if (timeRef.current) {
            clearTimeout(timeRef.current);
            timeRef.current = undefined;
          }
          setStyleInfos((v) => origin);
        }}
      >
        {styleInfos.map((info, index) => {
          const { top, left, bottom, right, width, height, ...rest } = info;
          return (
            <AnimatedLink
              href={`/projects/${keys[index]}`}
              key={`catalog-random-${index}`}
            >
              <div
                onMouseOver={(e) => {
                  e.stopPropagation();
                  handleHover(index);
                }}
                className={twMerge(
                  "absolute transition-all duration-1000 border-black flex items-center justify-center p-4 overflow-hidden",
                  index < styleInfos.length - 1 ? "border-4" : "border-none",
                  "text-ttertiary hover:text-thighlight hover:font-bold cursor-pointer",
                  "break-all text-wrap"
                )}
                style={{
                  top: top ? top + "%" : top,
                  left: left ? left + "%" : left,
                  bottom: bottom ? bottom + "%" : bottom,
                  right: right ? right + "%" : right,
                  width: width + "%",
                  height: height + "%",
                  ...rest,
                }}
              >
                {t(`projects.${keys[index]}.name`)}
              </div>
            </AnimatedLink>
          );
        })}
      </div>

      <div className="md:hidden border-4 w-full last:border-b-0 border-black">
        {styleInfos.map((item, index) => (
          <AnimatedLink
            href={`/projects/${keys[index]}`}
            key={`catalog-rect-${index}`}
          >
            <div className="p-4 cursor-pointer border-b-4 border-black hover:text-thighlight hover:font-bold">
              {t(`projects.${keys[index]}.name`)}
            </div>
          </AnimatedLink>
        ))}
      </div>
    </div>
  );
};

export default More;
