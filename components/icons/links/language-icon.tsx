import { twMerge } from "tailwind-merge";

function LanguageIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="-4.8 -4.8 33.6 33.6"
      className={twMerge(className, "stroke-ttertiary hover:stroke-current")}
    >
      <path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"></path>
    </svg>
  );
}

export default LanguageIcon;
