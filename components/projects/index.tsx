import { useState } from "react";
import { twMerge } from "tailwind-merge";
import RightArrow from "../icons/arrow-right";
import Role from "../icons/role";
import AnimatedLink from "../utils/animate-link";
import BeautyImage from "../utils/image";
const ItemWithPicture = () => {
  const [imageLoaded, setImageLoaded] = useState<ImageStatus>("success");

  return (
    <div>
      <BeautyImage
        imageLoaded={imageLoaded}
        setImageLoaded={setImageLoaded}
        src={"/images/1.png"}
        className={twMerge(
          "transition-all duration-500 origin-bottom ease-in-out w-full h-fit mb-3 hover:shadow-note",
          imageLoaded === "fail" && "mb-0"
        )}
      />
      {imageLoaded === "success" && <InfoInPicture />}
      {imageLoaded === "fail" && <InfoOnlyText />}
    </div>
  );
};

const InfoInPicture = () => {
  return (
    <div className="flex flex-col gap-2 w-full justify-between items-center">
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-8 items-center">
        <span className="text-lg">be merkdon note</span>

        <div className="flex items-center italic text-tsecondary">
          <Role />
          front developer backdeveloper design
        </div>
        <AnimatedLink
          className="cursor-pointer right-arrow hidden sm:block"
          href={"/projects/123"}
        >
          <RightArrow className="cursor-pointer" />
        </AnimatedLink>
      </div>
      <p className="break-all text-ttertiary">
        description
        descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
      </p>
      <AnimatedLink
        className="cursor-pointer right-arrow block sm:hidden"
        href={"/projects/123"}
      >
        <RightArrow className="cursor-pointer" />
      </AnimatedLink>
    </div>
  );
};

const InfoOnlyText = () => {
  return (
    <div className="flex flex-col gap-2 basis-[100%] md:basis-[48%] rounded-sm border-2 p-4 border-ttertiary">
      <p className="text-left text-xl font-bold">be markdown notwe</p>
      <div className="flex justify-end items-center">
        <Role />
        <p className="text-sm text-tsecondary">
          front developer back developer design
        </p>
      </div>

      <p className="break-all text-ttertiary">
        description
        descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
      </p>
      <div className="flex justify-center">
        <RightArrow className="cursor-pointer right-arrow" />
      </div>
    </div>
  );
};

const Projects = ({ className = "" }) => {
  return (
    <div className={twMerge("flex flex-col gap-6", className)}>
      <ItemWithPicture />
      <ItemWithPicture />
      <div className="flex flex-wrap justify-center gap-4">
        <InfoOnlyText />
        <InfoOnlyText />
        <InfoOnlyText />
      </div>
    </div>
  );
};

export default Projects;
