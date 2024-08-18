import RightArrow from "@/components/icons/arrow-right";
import Role from "@/components/icons/role";
import AnimatedLink from "@/components/utils/animate-link";
import UnderlineLink from "@/components/utils/underline-link";
import { sanitize } from "dompurify";
import { useTranslation } from "react-i18next";

interface InfoInPictureProps {
  project: ProjectItem;
}

const InfoWithPicture = ({ project }: InfoInPictureProps) => {
  const { key, deployment, roles } = project;
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2 w-full justify-between items-center px-4 sm:px-8">
      <div className="flex flex-col md:flex-row gap-0 md:gap-8 items-center">
        {deployment ? (
          <UnderlineLink
            name={t(`projects.${key}.name`)}
            url={deployment}
            className="font-bold text-xl"
          />
        ) : (
          <span className="font-bold text-xl">{t(`projects.${key}.name`)}</span>
        )}

        <div className="flex items-center italic text-tsecondary">
          <Role />

          {roles
            .map((role) => t(`projects.${key}.roles.${role}.name`))
            .join(" / ")}
        </div>
        <AnimatedLink
          className="cursor-pointer right-arrow hidden md:block"
          href={`/projects/${key}`}
          tooltip={t("projects.detail")}
        >
          <RightArrow className="cursor-pointer" />
        </AnimatedLink>
      </div>
      <div
        className="break-all text-ttertiary flex flex-col gap-2 items-start w-full content"
        dangerouslySetInnerHTML={{
          __html: sanitize(t(`projects.${key}.summary`)),
        }}
      ></div>
      <AnimatedLink
        className="cursor-pointer right-arrow block md:hidden"
        href={`/projects/${key}`}
        tooltip={t("projects.detail")}
      >
        <RightArrow className="cursor-pointer" />
      </AnimatedLink>
    </div>
  );
};

export default InfoWithPicture;
