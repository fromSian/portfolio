"use client";

import LeftArrow from "@/components/icons/arrow-left";
import More from "@/components/projects/more";
import Project from "@/components/projects/project";
import AnimatedLink from "@/components/utils/animate-link";
import { projectData, projectKeys } from "@/data/projects";
import { notFound } from "next/navigation";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
const page = ({ params }: { params: { id: string } }) => {
  const { id } = params || {};
  const data = useMemo(() => projectData.find((item) => item.key === id), [id]);
  const restKeys = useMemo(
    () => projectKeys.filter((item) => item !== id),
    [id]
  );
  const { t } = useTranslation();
  return data ? (
    <div className="px-4">
      <div className="flex items-center gap-2 w-full mb-4">
        <AnimatedLink className="" href="/">
          <LeftArrow className="w-6 h-6 sm:h-8 sm:w-8" />
        </AnimatedLink>
        <p className="flex-1 truncate text-2xl">{t(`projects.${id}.name`)}</p>
      </div>

      <Project data={data} />
      <More keys={restKeys} />
    </div>
  ) : (
    notFound()
  );
};

export default page;
