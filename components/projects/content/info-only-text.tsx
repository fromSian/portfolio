import RightArrow from "@/components/icons/arrow-right";
import Role from "@/components/icons/role";
import AnimatedLink from "@/components/utils/animate-link";
import { useTranslation } from "@/i18n/server";
import { Lng } from "@/types/global";
import { sanitize } from "isomorphic-dompurify";

const InfoOnlyText = async ({ project, lng }: ProjectProps & Lng) => {
  const { key, deployment, roles } = project;
  const { t } = await useTranslation(lng);

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
      <div className="flex-1">
        <div
          className="break-all text-ttertiary content"
          dangerouslySetInnerHTML={{
            __html: sanitize(t(`projects.${key}.summary`)),
          }}
        />
        <div
          className="break-all text-ttertiary content"
          dangerouslySetInnerHTML={{
            __html: sanitize(t(`projects.${key}.descriptions.stack`)),
          }}
        ></div>
      </div>

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
