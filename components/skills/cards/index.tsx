import Eraser from "@/components/icons/eraser";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Card from "./card";

const contents = [
  "I want ti skdfljiwoerklsdfjwehjkdslfksjsdflkjslkdfjwefksljaf;slfjksk;lahgksjdghwiurkwejrbkjsfdskjfhworijweoiugfdshfkgkdfjwehkdfjwehkdfjksksjhfiuweyriwerkjhlgfsdafuweyriqyeq9edjhsfbmnsbsdmnbfsdjlaf flsurwiru;QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wpnsf saurowir skdfljiwoerklsdfjwehjkdslfksjsdflkjslkdfjwefksljaf I want ti skdfljiwoerklsdfjwehjkdslfksjsdflkjslkdfjwefksljaf;slfjksk;lahgksjdghwiurkwejrbkjsfdskjfhworijweoiugfdshfkgkdfjwehkdfjwehkdfjksksjhfiuweyriwerkjhlgfsdafuweyriqyeq9edjhsfbmnsbsdmnbfsdjlaf flsurwiru;QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wpnsf saurowir",
  "9890j2kslaurewn ufhnegvceh v cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM",
];

const Cards = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState(contents[0]);
  const [height, setHeight] = useState(200);
  const [isEraser, setIsEraser] = useState(false);

  useEffect(() => {
    console.log(parentRef.current?.clientHeight);
    if (parentRef.current?.clientHeight) {
      setHeight(parentRef.current?.clientHeight);
    }
  }, [content]);

  return (
    <>
      {/* <button
        onClick={() => {
          setIsEraser(true);
          setTimeout(() => {
            setContent((c) => {
              const index = contents.indexOf(c);
              if (index === contents.length - 1) {
                return contents[0];
              }
              return contents[index + 1];
            });
            setIsEraser(false);
          }, 1125);
        }}
      >
        123
      </button> */}
      <div className="relative transition-all" ref={parentRef}>
        <Card
          className={twMerge("relative")}
          content={content}
          isEraser={isEraser}
          page={contents.indexOf(content) + 1}
          total={contents.length}
        />
        <div className={twMerge("absolute top-0 left-0")}>
          {isEraser && <Eraser width={384} height={height} />}
        </div>
      </div>
    </>
  );
};

export default Cards;
