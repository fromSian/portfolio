export const projectKeys = [
  "bemarkdownnotes",
  "musiczone",
  "question",
  "realscene",
  "ydyl",
  "teaching",
];

export const projectData = [
  {
    key: "bemarkdownnotes",
    roles: ["design", "frontend", "backend"],
    image: "welcome.png",
    deployment: "https://bemarkdownnotes.netlify.app/",
    links: [
      {
        key: "deployment1",
        url: "https://bemarkdownnotes.netlify.app/",
      },
      {
        key: "deployment2",
        url: "https://bemarkdownnotes.netlify.app/",
      },
      {
        key: "frontend",
        url: "https://bemarkdownnotes.netlify.app/",
      },
      {
        key: "backend",
        url: "https://bemarkdownnotes.netlify.app/",
      },
    ],
    descriptions: [
      {
        key: "opening",
        medias: [
          {
            key: "image1",
            url: "welcome.png",
            type: "image",
          },
          {
            key: "image2",
            url: "welcome.png",
            type: "image",
          },
        ],
      },
      {
        key: "welcome",
        medias: [
          {
            key: "image1",
            url: "image1.png",
            type: "image",
          },
        ],
      },
      {
        key: "welcome",
      },
    ],
  },
  {
    key: "musiczone",
    roles: ["design", "frontend", "backend"],
    image: "welcome.png",
    links: [
      {
        key: "frontend",
        url: "https://bemarkdownnotes.netlify.app/",
      },
      {
        key: "backend",
        url: "https://bemarkdownnotes.netlify.app/",
      },
    ],
    descriptions: [
      {
        key: "opening",
        medias: [
          {
            key: "image1",
            url: "welcome.png",
            type: "image",
          },
          {
            key: "image2",
            url: "welcome.png",
            type: "image",
          },
        ],
      },
    ],
  },
  {
    key: "question",
    roles: ["design", "frontend", "backend"],
    links: [
      {
        key: "frontend",
        url: "https://bemarkdownnotes.netlify.app/",
      },
      {
        key: "backend",
        url: "https://bemarkdownnotes.netlify.app/",
      },
    ],
    descriptions: [
      {
        key: "opening",
        medias: [
          {
            url: "welcome.png",
            type: "image",
          },
          {
            url: "welcome.png",
            type: "image",
          },
        ],
      },
    ],
  },
  {
    key: "realscene",
    roles: ["design", "frontend"],
    descriptions: [
      {
        key: "opening",
        medias: [
          {
            url: "welcome.png",
            type: "image",
          },
          {
            url: "welcome.png",
            type: "image",
          },
        ],
      },
    ],
  },
] as ProjectItem[];
