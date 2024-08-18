import { twMerge } from "tailwind-merge";

interface UnderlineLinkProps {
  name: string;
  url: string;
  className?: string;
}

const UnderlineLink = ({ name, url, className = "" }: UnderlineLinkProps) => {
  return (
    <div
      data-tooltip-id="my-tooltip"
      data-tooltip-content={url}
      data-tooltip-place="top"
      className="group flex flex-col w-max cursor-pointer"
    >
      <a
        target="blank"
        href={url}
        className={twMerge(
          "px-2 group-hover:text-thighlight text-tsecondary transition-all",
          className
        )}
      >
        {name}
      </a>
      <div className="w-0 h-0.5 bg-thighlight bottom-0 group-hover:w-full transition-all"></div>
    </div>
  );
};

export default UnderlineLink;
