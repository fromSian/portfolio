import Number from "@/components/icons/number";

interface ResponsibilityItemProps {
  index: number;
  name: string;
  detail: string;
}

const ResponsibilityItem = ({
  index,
  name,
  detail,
}: ResponsibilityItemProps) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-light-background">
        <Number index={index + 1} className="fill-light-foreground" />
      </div>

      <div className="text-wrap break-all">
        <p>{name}</p>
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default ResponsibilityItem;
