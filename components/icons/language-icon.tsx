function LanguageIcon({ width = 64, height = 64, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="-4.8 -4.8 33.6 33.6"
      className={className}
    >
      <rect
        width="33.6"
        height="33.6"
        x="-4.8"
        y="-4.8"
        fill="#8f9999"
        strokeWidth="0"
        rx="16.8"
      ></rect>
      <g>
        <path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"></path>
      </g>
    </svg>
  );
}

export default LanguageIcon;
