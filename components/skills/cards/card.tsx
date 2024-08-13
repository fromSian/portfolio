import Number from "@/components/icons/number";
import { twMerge } from "tailwind-merge";
interface CardProps {
  content: string;
  isEraser: boolean;
  page: number;
  total: number;
  className?: string;
}

const Card = ({
  content,
  isEraser,
  page,
  total,
  className = "",
}: CardProps) => {
  return (
    <div
      className={twMerge(
        "w-96 p-4 bg-bg-note shadow-note backdrop-filter backdrop-blur-sm bg-opacity-50 rounded-sm transition-all",
        className
      )}
    >
      <h3
        className={twMerge(
          "text-center text-2xl italic font-bold px-8 truncate mb-4",
          !isEraser && "animate-text-out"
        )}
      >
        title This is the most thing
      </h3>

      <p
        className={twMerge(
          "break-words text-ttertiary",
          !isEraser && "animate-text-out"
        )}
      >
        {content}
      </p>

      <div className="flex justify-end gap-2 items-center mt-4">
        <span className={twMerge(!isEraser && "animate-text-out")}>
          <Number index={page} width={16} height={16} />
        </span>

        <span className="text-ttertiary">/</span>
        <Number
          index={total}
          width={14}
          height={14}
          className="fill-tsecondary"
        />
      </div>
    </div>
  );
};

export default Card;
