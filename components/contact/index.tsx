import Links from "../header/links";
import GoTop from "../icons/go-top";

const Contact = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="px-4 flex flex-col items-center gap-4 relative">
      <button className="py-2 px-12 button-line transition-all tracking-wider">
        please contact me
      </button>
      <Links isStickyTop={true} />
      <div
        className="absolute right-4 -bottom-4 cursor-pointer w-8 sm:w-12"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="go top"
        data-tooltip-place="bottom"
        onClick={scrollTop}
      >
        <GoTop />
      </div>
    </div>
  );
};

export default Contact;
