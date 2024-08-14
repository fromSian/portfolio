import { ReactNode } from "react";

import { twMerge } from "tailwind-merge";
import TrainLeft from "../icons/train_left";
import TrainRight from "../icons/train_right";

interface MoveInProps {
  title: ReactNode;
  from?: "left" | "right";
}

const MoveIn = ({ title, from = "left" }: MoveInProps) => {
  return (
    <div
      className={twMerge(
        from === "left"
          ? "animate-enter-from-left"
          : "animate-enter-from-right",
        ""
      )}
    >
      <div
        className={twMerge(
          "flex items-center mb-8 py-4",
          from === "left"
            ? "animate-swing-end-for-left justify-end"
            : "animate-swing-end-for-right justify-start"
        )}
      >
        {from === "right" && <TrainLeft />}

        <div className="text-lg sm:text-2xl px-4 sm:px-6 py-2 font-bold top_title">
          {title}
        </div>
        {from === "left" && <TrainRight />}
      </div>
    </div>
  );
};

export default MoveIn;
