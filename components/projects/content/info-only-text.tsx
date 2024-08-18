import { useTranslation } from "react-i18next";

import RightArrow from "@/components/icons/arrow-right";
import Role from "@/components/icons/role";
import AnimatedLink from "@/components/utils/animate-link";
import { sanitize } from "dompurify";
interface InfoOnlyTextProps {
  project: ProjectItem;
}

const InfoOnlyText = ({ project }: InfoOnlyTextProps) => {
  const { key, deployment, roles } = project;
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2 basis-[100%] md:basis-[48%] rounded-sm border-2 p-4 border-ttertiary">
      <p className="text-left text-xl font-bold">{t(`projects.${key}.name`)}</p>
      <div className="flex justify-end items-center">
        <Role />
        <p className="text-sm text-tsecondary">
          {roles
            .map((role) => t(`projects.${key}.roles.${role}.name`))
            .join(" / ")}
        </p>
      </div>

      <div
        className="break-all text-ttertiary content"
        dangerouslySetInnerHTML={{
          __html: sanitize(t(`projects.${key}.summary`)),
        }}
      />
      <div className="flex justify-center">
        <AnimatedLink
          className="cursor-pointer right-arrow "
          href={`/projects/${key}`}
          tooltip={t("projects.detail")}
        >
          <RightArrow className="cursor-pointer" />
        </AnimatedLink>
      </div>
    </div>
  );
};

export default InfoOnlyText;
