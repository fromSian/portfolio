"use client";

import LeftArrow from "@/components/icons/arrow-left";
import Project from "@/components/projects/project";
import AnimatedLink from "@/components/utils/animate-link";

const page = ({ params }) => {
  const { id } = params || {};
  return (
    <div>
      <div className="flex items-center w-full gap-2 mb-4">
        <AnimatedLink className="" href="/">
          <LeftArrow className="w-10 h-10 sm:h-14 sm:w-14" />
        </AnimatedLink>
        <p className="flex-1 truncate text-2xl">{"1jioofpsarw123sd"}</p>
      </div>

      <Project />
    </div>
  );
};

export default page;
