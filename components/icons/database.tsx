import React from "react";

function Database() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="-2.4 -2.4 28.8 28.8"
    >
      <rect
        width="28.8"
        height="28.8"
        x="-2.4"
        y="-2.4"
        fill="#D6E5E5"
        strokeWidth="0"
        rx="2.88"
      ></rect>
      <g stroke="#283D5B" strokeWidth="1.5">
        <path strokeLinecap="round" d="M4 18V6M20 6v12"></path>
        <path d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4zM20 12c0 2.21-3.582 4-8 4s-8-1.79-8-4M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
      </g>
    </svg>
  );
}

export default React.memo(Database);
