import LinkItem from "./item";

const links = [
  {
    name: "jfklsdfj",
    url: "http://localhost:3000",
  },
  {
    name: "jfklsdfj",
    url: "http://localhost:3000",
  },
  {
    name: "jfklsdfj",
    url: "http://localhost:3000",
  },
];

const Links = () => {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <p className="uppercase mb-2 text-ttertiary text-lg">links</p>
      {links.map((link) => (
        <LinkItem {...link} />
      ))}
    </div>
  );
};

export default Links;
