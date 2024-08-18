/**
 *
 * @param text 'I want to be a == full stack developer == the end'
 * @returns 'I want to be a' <span className='text-thighlight'> full stack developer </span> the end'
 */

interface HighlightTextProps {
  text: string;
}
const HighlightText = ({ text }: HighlightTextProps) => {
  return (
    <>
      {/(==[^(==).]*==)/g[Symbol.split](text).map((item, index) => {
        if (item.startsWith("==") && item.endsWith("==")) {
          const word = item.replaceAll("==", "");
          return (
            <span className="text-thighlight" key={`highlight-${index}`}>
              {word}
            </span>
          );
        } else {
          return item;
        }
      })}
    </>
  );
};

export default HighlightText;
