import BeautyImage from "@/components/utils/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import InfoOnlyText from "./info-only-text";
import InfoWithPicture from "./info-with-picture";
interface ItemWithPictureProps {
  project: ProjectItem;
}
const ItemWithPicture = ({ project }: ItemWithPictureProps) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(true);

  return (
    <div
      className={twMerge(
        "flex flex-col items-center",
        imageLoaded ? "basis-[100%]" : "basis-[100%] md:basis-[50%]"
      )}
    >
      <BeautyImage
        imageLoaded={imageLoaded}
        setImageLoaded={setImageLoaded}
        src={`/images/${project.key}/${project.image}`}
        className={twMerge(
          "transition-all duration-500 origin-bottom ease-in-out w-full sm:w-[80%] h-fit mb-3 hover:shadow-note",
          !imageLoaded && "mb-0"
        )}
      />
      {imageLoaded ? (
        <InfoWithPicture project={project} />
      ) : (
        <InfoOnlyText project={project} />
      )}
    </div>
  );
};

export default ItemWithPicture;
