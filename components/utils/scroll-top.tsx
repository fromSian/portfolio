"use client";

import GoTop from "../icons/go-top";

const ScrollTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="fixed right-4 bottom-2 cursor-pointer w-8 sm:w-10 rounded-md bg-header-background backdrop-filter backdrop-blur-sm p-1"
      data-tooltip-id="my-tooltip"
      data-tooltip-content="go top"
      data-tooltip-place="bottom"
      onClick={scrollTop}
    >
      <GoTop />
    </div>
  );
};

export default ScrollTop;
