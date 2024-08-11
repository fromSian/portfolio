import { twMerge } from "tailwind-merge";

interface NamePositionProps {
  isStickyTop: boolean;
}

const NamePosition = ({ isStickyTop }: NamePositionProps) => {
  return (
    <div
      className={twMerge("flex gap-2", isStickyTop ? "flex-row" : "flex-col")}
    >
      <p className={twMerge(isStickyTop ? "text-xl" : "text-4xl")}>Soto</p>
      {isStickyTop && (
        <p
          className={twMerge(
            "italic text-tsecondary",
            isStickyTop ? "text-lg" : "text-3xl"
          )}
        >
          Full Stack Developer
        </p>
      )}
    </div>
  );
};

export default NamePosition;
