import { useTranslation } from "@/i18n/server";
import { Lng } from "@/types/global";
import { sanitize } from "isomorphic-dompurify";
import MediaMulti from "../media/multi";
import MediaOne from "../media/one";

interface MediaWithParaProps {
  dataKey: string;
  desc: Description;
  direction?: "right" | "left";
}

const MediaWithPara = async ({
  dataKey,
  desc,
  lng,
  direction = "right",
}: MediaWithParaProps & Lng) => {
  const { t } = await useTranslation(lng);
  return (
    <div className="clear-both">
      {desc.medias?.length &&
        (desc.medias.length > 1 ? (
          <MediaMulti
            direction={direction}
            medias={desc.medias}
            dataKey={dataKey}
          />
        ) : (
          <MediaOne
            direction={direction}
            media={desc.medias[0]}
            dataKey={dataKey}
          />
        ))}

      <div
        className="project_content"
        dangerouslySetInnerHTML={{
          __html: sanitize(t(`projects.${dataKey}.descriptions.${desc.key}`)),
        }}
      ></div>
    </div>
  );
};

export default MediaWithPara;
