interface CardsProps {
  setInitialData: (item: SkillItem) => void;
  handleEraser: (item: SkillItem) => void;
}

type SkillItem = {
  index: number;
  key: string;
  Icon: React.FC;
};

type BasicInfo = {
  name: string;
  description: string;
  position: string;
};

type Skill = {
  key: string;
  title: string;
  detail: string;
};

type Link = {
  key: string;
  url: string;
};

type Media = {
  key: string;
  url: string;
  type: "image" | "video";
};

type Description = {
  key: string;
  medias: Media[];
};

type ProjectItem = {
  key: string;
  roles: string[];
  image?: string;
  deployment?: string;
  links: Link[];
  descriptions: Description[];
};

type StyleInfo = {
  top: number | undefined;
  left: number | undefined;
  bottom: number | undefined;
  right: number | undefined;
  width: number;
  height: number;
  borderLeft?: number;
  borderRight?: number;
  borderTop?: number;
  borderBottom?: number;
};

interface ProjectProps {
  project: ProjectItem;
}
