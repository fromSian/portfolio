import Links from "./links";
import MediaWithPara from "./media-with-para";
import More from "./more";
import Responsibility from "./responsibility";
const Project = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col gap-8 mb-8">
        <MediaWithPara direction="right" />
        <MediaWithPara direction="left" />
      </div>
      <div className="flex flex-col sm:flex-row gap-6 clear-both">
        <Responsibility />
        <Links />
      </div>
      <More />
    </div>
  );
};

export default Project;
