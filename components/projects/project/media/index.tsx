import { useCallback, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "./image";
const interval = 2000;

const _data = [
  {
    index: 0,
    type: "image",
    src: "/images/1.png",
    title: "1.png",
  },
  {
    index: 1,
    type: "image",
    src: "/images/1.png",
    title: "1.png",
  },
  {
    index: 2,
    type: "image",
    src: "/images/icons8-github.svg",
    title: "1.png",
  },
  {
    index: 3,
    type: "image",
    src: "/images/test.svg",
    title: "1.png",
  },
  {
    index: 4,
    type: "image",
    src: "/images/test.svg",
    title: "1.png",
  },
];
const Media = ({ direction }) => {
  const [data, setData] = useState(_data);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [translateX, setTranslateX] = useState<number>(
    (-100 / data.length) * 1
  );
  const [dir, setDir] = useState(1);

  const animateRef = useRef<ReturnType<typeof setInterval>>();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const parentRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onresize = () => {
      if (parentRef.current) {
        setWidth(parentRef.current.clientWidth);
      }
    };
    onresize();

    window.addEventListener("resize", onresize);

    return () => {
      window.removeEventListener("resize", onresize);
    };
  }, []);

  const move = useCallback(
    (end: number) => {
      const per = 100 / data.length;
      setTranslateX(-per * end);
      setCurrentIndex(end);
    },
    [data]
  );

  const next = useCallback(() => {
    let _dir = dir;
    if (currentIndex === data.length - 2) {
      _dir = -1;
    } else if (currentIndex === 1) {
      _dir = 1;
    }
    setDir(_dir);
    move(currentIndex + 1 * _dir);
  }, [currentIndex, data, dir]);

  useEffect(() => {
    animateRef.current && clearInterval(animateRef.current);
    timeoutRef.current && clearTimeout(timeoutRef.current);
    animateRef.current = undefined;
    timeoutRef.current = undefined;
    animateRef.current = setInterval(next, interval);

    return () => {
      animateRef.current && clearInterval(animateRef.current);
      animateRef.current = undefined;
    };
  }, [next]);

  const onMouseOver = () => {
    animateRef.current && clearInterval(animateRef.current);
    timeoutRef.current && clearTimeout(timeoutRef.current);
    animateRef.current = undefined;
    timeoutRef.current = undefined;
  };

  const onMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      animateRef.current = setInterval(next, interval);
    }, interval);
  }, [next]);

  return (
    <div
      ref={parentRef}
      className={twMerge(
        "w-full sm:w-[50%] overflow-hidden float-start sm:float-right sm:mx-4 mb-4",
        direction === "right" && "sm:float-right",
        direction === "left" && "sm:float-left"
      )}
    >
      {width && (
        <>
          <div
            className={twMerge("flex w-max transition-all duration-1000")}
            style={{
              transform: `translateX(${translateX}%)`,
            }}
          >
            {data.map((item, index) => (
              <div
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
                key={`item${index}`}
                className="min-h-48"
                style={{
                  width: width,
                }}
              >
                <Image src={item.src} className="border" />
              </div>
            ))}
          </div>
          <div className="flex gap-2 justify-center my-2">
            {data.slice(1, data.length - 1).map((item, index) => (
              <div
                className={twMerge(
                  "w-3 h-3 rounded-full bg-ttertiary hover:bg-current transition-all cursor-pointer",
                  currentIndex === item.index && "bg-current"
                )}
                onClick={() => {
                  if (index === 1) {
                    setDir(1);
                  } else if (index === data.length - 2) {
                    setDir(-1);
                  }
                  move(index + 1);
                }}
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Media;
