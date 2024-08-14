import React from "react";

function GoTop({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="fill-ttertiary hover:fill-current transition-all"
    >
      <path
        fillRule="evenodd"
        d="M17.53 10.03a.75.75 0 000-1.06l-5-5a.75.75 0 00-1.06 0l-5 5a.75.75 0 101.06 1.06l3.72-3.72v8.19c0 .713-.22 1.8-.859 2.687-.61.848-1.635 1.563-3.391 1.563a.75.75 0 000 1.5c2.244 0 3.72-.952 4.609-2.187.861-1.196 1.141-2.61 1.141-3.563V6.31l3.72 3.72a.75.75 0 001.06 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default React.memo(GoTop);
