"use client";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import Projects from "@/components/projects";
import SelfIntroduction from "@/components/self-introduction";
import Skills from "@/components/skills";
import MoveIn from "@/components/utils/move-in";
import VisibleWhenScrollAt from "@/components/utils/visible-when-scroll-at";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [go, setGo] = useState("");

  useEffect(() => {
    console.log(navigator.language);
  }, []);
  return (
    <main className="pb-6">
      {true && <SelfIntroduction />}

      {true && (
        <VisibleWhenScrollAt
          Header={() => <MoveIn title={"skills"} />}
          Content={({ isInView }) => (
            <Skills
              className={twMerge(
                "mb-8",
                isInView ? "animate-show-out" : "opacity-0"
              )}
            />
          )}
        />
      )}
      {true && (
        <VisibleWhenScrollAt
          Header={() => <MoveIn title={"projects"} from="right" />}
          ratio={0.4}
          Content={({ isInView }) => (
            <Projects
              className={twMerge(
                "mb-8",
                isInView ? "animate-show-out" : "opacity-0"
              )}
            />
          )}
        />
      )}
      {true && (
        <VisibleWhenScrollAt
          Header={() => <MoveIn title={"experiences"} from="left" />}
          Content={({ isInView }) => (
            <Experiences
              className={twMerge(
                "mb-8",
                isInView ? "animate-show-out" : "opacity-0"
              )}
            />
          )}
        />
      )}

      {true && <Contact />}
    </main>
  );
}
