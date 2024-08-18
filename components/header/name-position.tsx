"use client";
import { email_address } from "@/common/links";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
interface NamePositionProps {
  isStickyTop: boolean;
  name: string;
  position: string;
}

const NamePosition = ({ isStickyTop, name, position }: NamePositionProps) => {
  const pathname = usePathname();
  return (
    <div className={twMerge("flex gap-2 items-center")}>
      <p
        className={twMerge("text-nowrap", isStickyTop ? "text-xl" : "text-4xl")}
      >
        {name}
      </p>
      {(isStickyTop || pathname.startsWith("/projects")) && (
        <p
          className={twMerge(
            "italic text-tsecondary text-nowrap",
            isStickyTop ? "text-lg" : "text-3xl"
          )}
        >
          {position}
        </p>
      )}
      <p className="text-ttertiary">{email_address}</p>
    </div>
  );
};

export default NamePosition;
