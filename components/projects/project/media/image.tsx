import BeautyImage from "@/components/utils/image";
import { useState } from "react";

const Image = ({ src }) => {
  const [imageLoaded, setImageLoaded] = useState<ImageStatus>("success");
  return (
    <BeautyImage
      isShowError={true}
      imageLoaded={imageLoaded}
      setImageLoaded={setImageLoaded}
      src={src}
    />
  );
};

export default Image;
