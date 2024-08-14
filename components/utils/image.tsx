import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
interface ImageProps {
  src: string;
  imageLoaded: ImageStatus;
  setImageLoaded: Dispatch<SetStateAction<ImageStatus>>;
  className?: string;
}

const BeautyImage = ({
  src,
  imageLoaded,
  setImageLoaded,
  className = "",
}: ImageProps) => {
  /**
   * onLoad event
   */
  const onImageLoad = () => {
    console.log("success");
    setImageLoaded("success");
  };

  const onError = () => {
    console.log("fail");
    setImageLoaded("fail");
  };

  return (
    <div
      className={twMerge(
        "flex flex-col justify-center items-center text-xs text-ttertiary",
        className
      )}
    >
      <div
        className={twMerge(
          "grid",
          imageLoaded !== "fail"
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <img className="" src={src} onLoad={onImageLoad} onError={onError} />
        </div>
      </div>
    </div>
  );
};

export default BeautyImage;
