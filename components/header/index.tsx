"use client";
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { twMerge } from "tailwind-merge";
import Links from "./links";
import NamePosition from "./name-position";

const Header = () => {
  const topLineRef = useRef<HTMLDivElement>(null);
  const observeRef = useRef<IntersectionObserver>();
  const [isStickyTop, setStickyTop] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "4px",
      threshold: 0.3,
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setStickyTop(false);
      } else {
        setStickyTop(true);
      }
    };
    observeRef.current = new IntersectionObserver(callback, options);
    topLineRef.current && observeRef.current.observe(topLineRef.current);

    return () => {
      topLineRef.current && observeRef.current?.unobserve(topLineRef.current);
      observeRef.current?.disconnect();
      observeRef.current = undefined;
    };
  }, []);
  return (
    <>
      <div className="h-4 w-full invisible" ref={topLineRef}></div>
      <header
        className={twMerge(
          "z-10 backdrop-filter w-full bg-opacity-20 backdrop-blur-sm sticky top-0 transition-all",
          "flex justify-between items-center gap-2 py-2",
          isStickyTop ? "px-4 bg-white" : "px-8"
        )}
      >
        <NamePosition isStickyTop={isStickyTop} />
        <Links isStickyTop={isStickyTop} />
      </header>
      <Tooltip id="my-tooltip" className="z-20" />
    </>
  );
};

export default Header;
