import Links from "../header/links";

const Contact = () => {
  return (
    <div className="px-4 flex flex-col items-center gap-4 relative mt-4">
      <button className="py-2 px-12 button-line transition-all tracking-wider">
        please contact me
      </button>
      <Links isStickyTop={true} isBottom={true} />
    </div>
  );
};

export default Contact;
