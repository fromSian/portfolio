import Number from "@/components/icons/number";
import { sanitize } from "isomorphic-dompurify";

interface ResponsibilityItemProps {
  index: number;
  name: string;
  detail: string;
  isHideNumber?: boolean;
}

const ResponsibilityItem = ({
  index,
  name,
  detail,
  isHideNumber = false,
}: ResponsibilityItemProps) => {
  return (
    <div className="flex gap-4 items-start">
      {!isHideNumber && (
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-light-background">
          <Number index={index + 1} className="fill-light-foreground" />
        </div>
      )}

      <div className="text-wrap break-all">
        {!isHideNumber && <p className="mb-1 text-tsecondary">{name}</p>}
        <div
          className="text-ttertiary flex flex-col gap-2"
          dangerouslySetInnerHTML={{
            __html: sanitize(detail),
          }}
        ></div>
      </div>
    </div>
  );
};

export default ResponsibilityItem;
