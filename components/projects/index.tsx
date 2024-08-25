import { projectData } from "@/data/projects";
import { twMerge } from "tailwind-merge";

import InfoOnlyText from "./content/info-only-text";
import ItemWithPicture from "./content/item-with-picture";

const Projects = ({
  className = "",
  lng,
}: {
  className?: string;
  lng: string;
}) => {
  return (
    <div className={twMerge("flex flex-col gap-6", className)}>
      <div className="flex flex-wrap justify-center gap-4">
        {projectData.map((project, index) =>
          project?.image ? (
            <ItemWithPicture
              project={project}
              key={`project-${index}`}
              lng={lng}
            />
          ) : (
            <InfoOnlyText
              project={project}
              key={`project-${index}`}
              lng={lng}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
