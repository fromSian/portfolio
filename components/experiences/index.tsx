import { twMerge } from "tailwind-merge";

const data = [
  ["jfso", "name", "description", "kflds"],
  ["jfso", "name", "description", "kflds"],
  ["jfso", "name", " descrip", "kflds"],
];

interface ProjectsProps {
  className?: string;
}

const Experiences = ({ className = "" }: ProjectsProps) => {
  return (
    <div className={twMerge("flex flex-col gap-6", className)}>
      {data.map((item, index) => (
        <ul
          key={`experiences-${index}`}
          className={twMerge(
            "flex py-2 px-4 rounded-md items-center justify-between",
            index === 0
              ? "bg-table-header-background text-table-header-foreground font-extrabold shadow-none mb-2"
              : "bg-foreground shadow-note"
          )}
        >
          {item.map((v, i) => (
            <li
              key={`experience-${index}-${i}`}
              className="w-[25%] text-center break-word text-wrap whitespace-normal wrap overflow-hidden"
            >
              {v}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Experiences;
