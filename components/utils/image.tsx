import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
import ImageError from "../icons/image-error";
interface ImageProps {
  src: string;
  imageLoaded: ImageStatus;
  setImageLoaded: Dispatch<SetStateAction<ImageStatus>>;
  className?: string;
  isShowError?: boolean;
}

const BeautyImage = ({
  src,
  imageLoaded,
  setImageLoaded,
  className = "",
  isShowError = false,
}: ImageProps) => {
  /**
   * onLoad event
   */
  const onImageLoad = () => {
    setImageLoaded("success");
  };

  const onError = () => {
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
      {imageLoaded === "fail" && isShowError && (
        <div className="flex flex-col items-center justify-center">
          <ImageError />
        </div>
      )}
    </div>
  );
};

export default BeautyImage;
