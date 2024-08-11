import Dev from "../icons/dev";
import Email from "../icons/email";
import GitHubIcon from "../icons/github";

interface LinksProps {
  isStickyTop: boolean;
}
const Links = ({ isStickyTop }: LinksProps) => {
  return (
    <div className="flex gap-2 items-center">
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="email"
        data-tooltip-place="bottom"
      >
        <Email
          width={isStickyTop ? 32 : 56}
          height={isStickyTop ? 32 : 56}
          className="transition-all cursor-pointer"
        />
      </a>
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="GitHub"
        data-tooltip-place="bottom"
      >
        <GitHubIcon
          width={isStickyTop ? 36 : 64}
          height={isStickyTop ? 36 : 64}
          className="transition-all cursor-pointer"
        />
      </a>
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="dev.io community"
        data-tooltip-place="bottom"
      >
        <Dev
          width={isStickyTop ? 32 : 56}
          height={isStickyTop ? 32 : 56}
          className="transition-all cursor-pointer"
        />
      </a>
    </div>
  );
};

export default Links;
