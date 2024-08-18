"use client";
import Experiences from "@/components/experiences";
import Projects from "@/components/projects";
import SelfIntroduction from "@/components/self-introduction";
import Skills from "@/components/skills";
import MoveIn from "@/components/utils/move-in";
import VisibleWhenScrollAt from "@/components/utils/visible-when-scroll-at";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <main className="pb-6">
      <SelfIntroduction />

      <VisibleWhenScrollAt
        Header={() => <MoveIn title={t("title.skills")} />}
        Content={({ isInView }) => (
          <Skills
            className={twMerge(
              "mb-8",
              isInView ? "animate-show-out" : "opacity-0"
            )}
          />
        )}
      />

      <VisibleWhenScrollAt
        Header={() => <MoveIn title={t("title.projects")} from="right" />}
        ratio={0.5}
        Content={({ isInView }) => (
          <Projects
            className={twMerge(
              "mb-8",
              isInView ? "animate-show-out" : "opacity-0"
            )}
          />
        )}
      />

      <VisibleWhenScrollAt
        Header={() => <MoveIn title={t("title.experiences")} from="left" />}
        Content={({ isInView }) => (
          <Experiences
            className={twMerge(
              "mb-8",
              isInView ? "animate-show-out" : "opacity-0"
            )}
          />
        )}
      />
    </main>
  );
}
