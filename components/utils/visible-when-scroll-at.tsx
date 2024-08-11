import { ReactNode, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
interface VisibleWhenScrollAtProps {
  Header: () => ReactNode;
  Content: ({ className }) => ReactNode;
}
const VisibleWhenScrollAt = ({ Header, Content }: VisibleWhenScrollAtProps) => {
  const topLineRef = useRef<HTMLDivElement>(null);
  const observeRef = useRef<IntersectionObserver>();
  const [isInView, setIsInView] = useState(false);
  const initialRatioRef = useRef(0);

  const clearObserver = () => {
    topLineRef.current && observeRef.current?.unobserve(topLineRef.current);
    observeRef.current?.disconnect();
    observeRef.current = undefined;
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "",
      threshold: 1,
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        setIsInView(true);
        clearObserver();
      }
      initialRatioRef.current = entry.intersectionRatio;
    };
    observeRef.current = new IntersectionObserver(callback, options);
    topLineRef.current && observeRef.current.observe(topLineRef.current);

    return () => {
      clearObserver();
    };
  }, []);
  return (
    <div>
      <div ref={topLineRef} className="w-full h-1 bg-blue-500 invisible"></div>

      {isInView && <Header />}

      <Content
        className={twMerge(isInView ? "animate-show-out" : "opacity-0")}
      />
    </div>
  );
};

export default VisibleWhenScrollAt;
