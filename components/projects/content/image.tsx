"use client";
import BeautyImage from "@/components/utils/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const Image = ({ project }: ProjectProps) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
  }, []);
  if (!isMount) return null;
  return (
    <BeautyImage
      imageLoaded={imageLoaded}
      setImageLoaded={setImageLoaded}
      src={`/images/${project.key}/${project.image}`}
      className={twMerge(
        "transition-all duration-500 origin-bottom ease-in-out w-full sm:w-[80%] h-fit mb-3 hover:shadow-note",
        !imageLoaded && "mb-0"
      )}
    />
  );
};

export default Image;
