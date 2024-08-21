function LoadingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 48 48"
    >
      <g>
        <path fill="#fff" fillOpacity="0.01" d="M0 0H48V48H0z"></path>
        <path
          className="stroke-ttertiary"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M4 24c0 11.046 8.954 20 20 20v0c11.046 0 20-8.954 20-20S35.046 4 24 4"
        ></path>
        <path
          className="stroke-ttertiary"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M36 24c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12v0"
        ></path>
      </g>
    </svg>
  );
}

export default LoadingIcon;
