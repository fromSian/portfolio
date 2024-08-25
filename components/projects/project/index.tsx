import { Lng } from "@/types/global";
import { twMerge } from "tailwind-merge";
import Links from "./links";
import MediaWithPara from "./media-with-para";
import Responsibility from "./responsibility";

interface ProjectProps {
  data: ProjectItem;
}
const Project = ({ data, lng }: ProjectProps & Lng) => {
  return (
    <div className="px-4">
      {data.descriptions?.length && (
        <div className="flex flex-col">
          {data.descriptions.map((desc, index) => (
            <MediaWithPara
              direction={index % 2 ? "left" : "right"}
              desc={desc}
              dataKey={data.key}
              key={`project-${index}`}
              lng={lng}
            />
          ))}
        </div>
      )}
      <div
        className={twMerge(
          "flex flex-col sm:flex-row gap-6 clear-both",
          !data?.image && "flex-col sm:flex-col"
        )}
      >
        <Responsibility
          roles={data.roles}
          dataKey={data.key}
          isHideNumber={!data.image}
          lng={lng}
        />
        {data.links && data.links.length && (
          <Links dataKey={data.key} links={data.links} lng={lng} />
        )}
      </div>
    </div>
  );
};

export default Project;
