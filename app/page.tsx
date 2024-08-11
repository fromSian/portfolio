"use client";
import Eraser from "@/components/icons/eraser";
import SelfIntroduction from "@/components/self-introduction";
import Skills from "@/components/skills";
import MoveIn from "@/components/utils/move-in";
import VisibleWhenScrollAt from "@/components/utils/visible-when-scroll-at";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const [go, setGo] = useState("");

  useEffect(() => {}, []);
  return (
    <main className="">
      <div className="">
        {/* <AnimatedLink href="/project/2">123</AnimatedLink> */}
        <SelfIntroduction />
        <div className="relative">
          <p className="absolute">
            087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj087hjsdykfj
          </p>
          <div className="absolute z-20">
            <Eraser />
          </div>
        </div>

        <VisibleWhenScrollAt
          Header={() => <MoveIn title={"skills"} />}
          Content={({ className }) => (
            <div className={twMerge("", className)}>
              <Skills />
            </div>
          )}
        />
        <VisibleWhenScrollAt
          Header={() => <MoveIn title={"projects"} from="right" />}
          Content={({ className }) => (
            <div className={twMerge("", className)}>
              <Skills />
            </div>
          )}
        />
        <VisibleWhenScrollAt
          Header={() => <MoveIn title={"experience"} />}
          Content={({ className }) => (
            <p className={twMerge("my-96", className)}>
              Iwantsfjksluriowetu Iwantsfjksluriowetu <br />
              Iwantsfjksluriowetu Iwantsfjksluriowetu Iwantsfjksluriowetu <br />
              Iwantsfjksluriowetu Iwantsfjksluriowetu Iwantsfjksluriowetu <br />
              Iwantsfjksluriowetu Iwantsfjksluriowetu Iwantsfjksluriowetu
            </p>
          )}
        />
      </div>
    </main>
  );
}
