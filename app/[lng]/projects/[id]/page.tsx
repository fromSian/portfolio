import LeftArrow from "@/components/icons/arrow-left";
import More from "@/components/projects/more";
import Project from "@/components/projects/project";
import AnimatedLink from "@/components/utils/animate-link";
import { projectData, projectKeys } from "@/data/projects";
import { useTranslation } from "@/i18n/server";
import { notFound } from "next/navigation";
const Page = async ({ params }: { params: { id: string; lng: string } }) => {
  const { id, lng } = params || {};
  const data = projectData.find((item) => item.key === id);
  const restKeys = projectKeys.filter((item) => item !== id);
  const { t } = await useTranslation(lng);
  return data ? (
    <div className="px-4">
      <div className="flex items-center gap-2 w-full mb-4">
        <AnimatedLink className="" href="/">
          <LeftArrow className="w-6 h-6 sm:h-8 sm:w-8" />
        </AnimatedLink>
        <p className="flex-1 truncate text-2xl">{t(`projects.${id}.name`)}</p>
      </div>

      <Project data={data} lng={lng} />
      <More keys={restKeys} />
    </div>
  ) : (
    notFound()
  );
};

export default Page;
