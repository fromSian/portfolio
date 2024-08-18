import React from "react";
import { twMerge } from "tailwind-merge";

function Role() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 100 100"
      className={twMerge("fill-ttertiary")}
    >
      <path d="M44 63.3c0-3.4 1.1-7.2 2.9-10.2 2.1-3.7 4.5-5.2 6.4-8 3.1-4.6 3.7-11.2 1.7-16.2-2-5.1-6.7-8.1-12.2-8s-10 3.5-11.7 8.6c-2 5.6-1.1 12.4 3.4 16.6 1.9 1.7 3.6 4.5 2.6 7.1-.9 2.5-3.9 3.6-6 4.6-4.9 2.1-10.7 5.1-11.7 10.9-1 4.7 2.2 9.6 7.4 9.6H48c1 0 1.6-1.2 1-2-3.2-3.6-5-8.2-5-13zm20-15c-8.2 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm2.6 16.4c-.4 0-.9-.1-1.2-.2l-5.7 5.7c-.4.4-.9.5-1.2.5-.5 0-.9-.1-1.2-.5-.6-.6-.6-1.7 0-2.5L63 62c-.1-.4-.2-.7-.2-1.2-.2-2.6 1.9-5 4.5-5 .4 0 .9.1 1.2.2.2 0 .2.2.1.4L66 58.9c-.2.1-.2.5 0 .6l1.7 1.7c.2.2.5.2.7 0l2.5-2.5c.1-.1.4-.1.4.1.1.4.2.9.2 1.2.1 2.8-2.1 4.9-4.9 4.7z"></path>
    </svg>
  );
}

export default React.memo(Role);
