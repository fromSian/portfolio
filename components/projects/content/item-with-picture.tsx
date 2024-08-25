import { Lng } from "@/types/global";
import { twMerge } from "tailwind-merge";
import Image from "./image";
import InfoWithPicture from "./info-with-picture";

const ItemWithPicture = ({ project, lng }: ProjectProps & Lng) => {
  return (
    <div className={twMerge("flex flex-col items-center", "basis-[100%]")}>
      <Image project={project} />
      <InfoWithPicture project={project} lng={lng} />
    </div>
  );
};

export default ItemWithPicture;
