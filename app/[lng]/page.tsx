import Experiences from "@/components/experiences";
import Projects from "@/components/projects";
import SelfIntroduction from "@/components/self-introduction";
import Skills from "@/components/skills";
import MoveIn from "@/components/utils/move-in";
import VisibleWhenScrollAt from "@/components/utils/visible-when-scroll-at";
import { useTranslation } from "@/i18n/server";
import { Params } from "@/types/global";

export default async function Home({ params: { lng } }: Params) {
  const { t, i18n } = await useTranslation(lng);

  return (
    <main className="pb-6">
      <SelfIntroduction />
      <VisibleWhenScrollAt
        Header={<MoveIn title={t("title.skills")} />}
        Content={<Skills lng={lng} />}
      />

      <VisibleWhenScrollAt
        Header={<MoveIn title={t("title.projects")} from="right" />}
        ratio={0.4}
        Content={<Projects lng={lng} />}
      />

      <VisibleWhenScrollAt
        Header={<MoveIn title={t("title.experiences")} from="left" />}
        Content={<Experiences lng={lng} />}
      />
    </main>
  );
}
