import { twMerge } from "tailwind-merge";
import Links from "./links";
import MediaWithPara from "./media-with-para";
import Responsibility from "./responsibility";

interface ProjectProps {
  data: ProjectItem;
}
const Project = ({ data }: ProjectProps) => {
  return (
    <div className="px-4">
      <div className="flex flex-col gap-8 mb-8">
        {data.descriptions.map((desc, index) => (
          <MediaWithPara
            direction={index % 2 ? "left" : "right"}
            desc={desc}
            dataKey={data.key}
            key={`project-${index}`}
          />
        ))}
      </div>
      <div
        className={twMerge(
          "flex flex-col sm:flex-row gap-6 clear-both",
          !data?.image && "flex-col sm:flex-col"
        )}
      >
        <Responsibility roles={data.roles} dataKey={data.key} />
        {data.links && data.links.length && (
          <Links dataKey={data.key} links={data.links} />
        )}
      </div>
    </div>
  );
};

export default Project;
