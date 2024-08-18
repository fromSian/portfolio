import ArrowUp from "@/components/icons/arrow-up";
import UnderlineLink from "@/components/utils/underline-link";

interface LinkItemProps {
  name: string;
  url: string;
}

const LinkItem = ({ name, url }: LinkItemProps) => {
  return (
    <div className="bg-table-header-background py-2 px-4 relative overflow-hidden rounded-md flex justify-between items-center">
      <div
        className="absolute w-1 h-full top-0 left-0 gap-2 sm:gap-4"
        style={{
          backgroundColor: "rgb(77,109,88)",
        }}
      ></div>
      <UnderlineLink name={name} url={url} />
      <div className="w-6 sm:w-8 cursor-pointer">
        <ArrowUp />
      </div>
    </div>
  );
};

export default LinkItem;
