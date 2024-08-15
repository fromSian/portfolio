import React from "react";
import { twMerge } from "tailwind-merge";

function LeftArrow({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={twMerge(
        "fill-ttertiary hover:fill-current transition-all ",
        className
      )}
    >
      <path d="M9.66 8.53a.75.75 0 00-1.059-1.06l1.06 1.06zm-5.19 3.063a.75.75 0 001.06 1.062l-1.06-1.062zm1.043-.016a.75.75 0 10-1.026 1.094l1.026-1.094zm3.105 4.97a.75.75 0 101.026-1.094l-1.026 1.094zM5 11.374a.75.75 0 000 1.5v-1.5zm10.37.75v.75h.002l-.002-.75zm2.563 1.053l.528-.532-.528.532zm.317 2.558a.75.75 0 001.5-.004l-1.5.004zM8.601 7.47l-4.13 4.124 1.059 1.062L9.66 8.53 8.602 7.469zm-4.114 5.202l4.13 3.876 1.027-1.094-4.13-3.876-1.027 1.094zm.513.203h10.37v-1.5H5v1.5zm10.372 0a2.869 2.869 0 012.032.834l1.057-1.063a4.37 4.37 0 00-3.093-1.271l.004 1.5zm2.032.834a2.87 2.87 0 01.846 2.027l1.5-.004a4.369 4.369 0 00-1.289-3.086l-1.057 1.063z"></path>
    </svg>
  );
}

export default React.memo(LeftArrow);
