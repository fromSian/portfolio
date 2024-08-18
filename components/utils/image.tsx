import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
import ImageError from "../icons/image-error";
interface ImageProps {
  src: string;
  imageLoaded: boolean;
  setImageLoaded: Dispatch<SetStateAction<boolean>>;
  className?: string;
  imageClassName?: string;
  isShowError?: boolean;
}

const BeautyImage = ({
  src,
  imageLoaded,
  setImageLoaded,
  className = "",
  imageClassName = "",
  isShowError = false,
}: ImageProps) => {
  /**
   * onLoad event
   */
  const onImageLoad = () => {
    setImageLoaded(true);
  };

  const onError = () => {
    setImageLoaded(false);
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
          imageLoaded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <img
            className={imageClassName}
            src={src}
            onLoad={onImageLoad}
            onError={onError}
          />
        </div>
      </div>
      {!imageLoaded && isShowError && (
        <div className="flex flex-col items-center justify-center">
          <ImageError />
        </div>
      )}
    </div>
  );
};

export default BeautyImage;
