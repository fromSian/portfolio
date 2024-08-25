import { useTranslation } from "@/i18n/server";
import { Lng } from "@/types/global";
import LinkItem from "./item";

interface LinksProps {
  dataKey: string;
  links: Link[];
}

const Links = async ({ dataKey, links, lng }: LinksProps & Lng) => {
  const { t } = await useTranslation(lng);
  return (
    <div className="flex flex-col gap-4 flex-1">
      <p className="uppercase mb-2 text-ttertiary text-lg font-bold">
        {t(`projects.links`)}
      </p>
      {links.map((link, index) => (
        <LinkItem
          name={t(`projects.${dataKey}.links.${link.key}`)}
          url={link.url}
          key={`link-${index}`}
        />
      ))}
    </div>
  );
};

export default Links;
