import React from "react";

function GoTop({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="stroke-tsecondary fill-tsecondary hover:fill-current hover:stroke-current transition-all"
    >
      <g>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 7v14"
        ></path>
        <path d="M11.797 2.285l-3.893 5.45A.8.8 0 008.554 9h6.891a.8.8 0 00.651-1.265l-3.893-5.45a.25.25 0 00-.406 0z"></path>
      </g>
    </svg>
  );
}

export default React.memo(GoTop);
