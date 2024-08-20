import { sanitize } from "dompurify";
import { useTranslation } from "react-i18next";
import MediaMulti from "../media/multi";
import MediaOne from "../media/one";

interface MediaWithParaProps {
  dataKey: string;
  desc: Description;
  direction?: "right" | "left";
}

const MediaWithPara = ({
  dataKey,
  desc,
  direction = "right",
}: MediaWithParaProps) => {
  const { t } = useTranslation();
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
