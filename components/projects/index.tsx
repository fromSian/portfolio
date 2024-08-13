import { twMerge } from "tailwind-merge";
import RightArrow from "../icons/right-arrow";
import Role from "../icons/role";
import VisibleWhenScrollAt from "../utils/visible-when-scroll-at";

const ItemWithPicture = () => {
  return (
    <div>
      <VisibleWhenScrollAt
        once={false}
        ratio={0.7}
        Content={({ isInView }) => (
          <img
            src={"/images/1.png"}
            className={twMerge(
              "transition-all duration-500 mb-3 origin-bottom ease-in-out",
              isInView ? "shadow-note" : "shadow-none"
            )}
          />
        )}
      />
      <InfoInPicture />
    </div>
  );
};

const InfoInPicture = () => {
  return (
    <div className="flex flex-col gap-2 w-full justify-between px-4 items-center">
      <div className="flex gap-8 items-center">
        <span className="text-lg">be merkdon note</span>

        <div className="flex items-center italic text-tsecondary">
          <Role />
          front developer backdeveloper design
        </div>
        <RightArrow className="cursor-pointer right-arrow" />
      </div>
      <p className="break-all text-ttertiary">
        description
        descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
      </p>
    </div>
  );
};

const InfoOnlyText = () => {
  return (
    <div className="flex flex-col gap-2 basis-[100%] md:basis-[48%] border-2 p-4 rounded-md">
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
