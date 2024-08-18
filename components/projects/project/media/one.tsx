import { twMerge } from "tailwind-merge";
import Image from "./image";
const interval = 2000;

interface MediaProps {
  direction: "left" | "right";
  media: Media;
  dataKey: string;
}

const MediaOne = ({ direction, media, dataKey }: MediaProps) => {
  return (
    <div
      className={twMerge(
        "w-full sm:w-[50%] overflow-hidden float-none sm:float-right sm:mx-4 mb-4",
        direction === "right" && "sm:float-right",
        direction === "left" && "sm:float-left"
      )}
    >
      <div className="min-h-48">
        <Image src={`/images/${dataKey}/${media.url}`} className="rounded-md" />
      </div>

      <div className="flex gap-2 justify-center my-2">
        <div
          className={twMerge(
            "w-3 h-3 rounded-full bg-image-dot-active transition-all cursor-pointer"
          )}
        ></div>
      </div>
    </div>
  );
};

export default MediaOne;
