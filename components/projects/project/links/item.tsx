import ArrowUp from "@/components/icons/arrow-up";

const LinkItem = ({ name, url }) => {
  return (
    <div className="bg-black py-2 px-4 relative overflow-hidden rounded-md flex justify-between items-center">
      <div
        className="absolute w-1 h-full top-0 left-0 gap-2 sm:gap-4"
        style={{
          backgroundColor: "rgb(77,109,88)",
        }}
      ></div>
      <div
        data-tooltip-id="my-tooltip"
        data-tooltip-content={url}
        data-tooltip-place="top"
        className="group flex flex-col w-max cursor-pointer"
      >
        <a
          target="blank"
          href={url}
          className="px-2 group-hover:text-thighlight text-tsecondary transition-all"
        >
          {name}
        </a>
        <div className="w-0 h-0.5 bg-thighlight bottom-0 group-hover:w-full transition-all"></div>
      </div>
      <div className="w-6 sm:w-8 cursor-pointer">
        <ArrowUp />
      </div>
    </div>
  );
};

export default LinkItem;
