import { ReactNode, useEffect, useRef, useState } from "react";
interface VisibleWhenScrollAtProps {
  ratio?: number;
  Header?: () => ReactNode;
  Content?: ({ isInView }: { isInView: boolean }) => ReactNode;
  once?: boolean;
}
const VisibleWhenScrollAt = ({
  Header,
  Content,
  ratio = 0.6,
  once = true,
}: VisibleWhenScrollAtProps) => {
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
    if (!topLineRef.current) return;
    const rootTargetHeightRatio = +(
      window.innerHeight / topLineRef.current.clientHeight
    ).toFixed(6);
    const options = {
      root: null,
      rootMargin: "",
      threshold:
        rootTargetHeightRatio > 1 ? ratio : rootTargetHeightRatio * ratio,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsInView(true);
        if (once) {
          clearObserver();
        }
      } else {
        setIsInView(false);
      }
      initialRatioRef.current = entry.intersectionRatio;
    };
    observeRef.current = new IntersectionObserver(callback, options);
    observeRef.current.observe(topLineRef.current);

    return () => {
      clearObserver();
    };
  }, [once, ratio]);

  return (
    <div className="flex items-stretch pr-4">
      <div
        ref={topLineRef}
        className="w-2 sm:w-4 bg-blue-500 flex-shrink-0 invisible"
      ></div>
      <div className="flex-auto relative">
        {Header && isInView && <Header />}

        {Content && <Content isInView={isInView} />}
      </div>
    </div>
  );
};

export default VisibleWhenScrollAt;
