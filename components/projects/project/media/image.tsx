import BeautyImage from "@/components/utils/image";
import { useState } from "react";

interface ImageProps {
  src: string;
  className?: string;
}
const Image = ({ src, className = "" }: ImageProps) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(true);
  return (
    <BeautyImage
      isShowError={true}
      imageLoaded={imageLoaded}
      setImageLoaded={setImageLoaded}
      imageClassName={className}
      src={src}
    />
  );
};

export default Image;
