import ResponsibilityItem from "./item";

const data = [
  "front",
  "back end and something elese",
  "design and test and wanna",
];

const Responsibility = () => {
  return (
    <>
      <div className="flex flex-col gap-4 flex-1">
        <p className="uppercase mb-2  text-ttertiary text-lg">responsibility</p>
        {data.map((item, index) => (
          <ResponsibilityItem index={index} content={item} />
        ))}
      </div>
    </>
  );
};

export default Responsibility;
