export const projectKeys = [
  "bemarkdownnotes",
  "cim",
  "geoscene",
  "realscene",
  "ydyl",
  "plan",
];

export const projectData = [
  {
    key: "bemarkdownnotes",
    roles: ["design", "frontend", "backend"],
    image: "signin.png",
    deployment: "https://bemarkdownnotes.netlify.app/",
    links: [
      {
        key: "deployment1",
        url: "https://bemarkdownnotes.netlify.app/",
      },
      {
        key: "deployment2",
        url: "https://be-markdown-notes.vercel.app/",
      },
      {
        key: "frontend",
        url: "https://github.com/fromSian/be-markdown-notes",
      },
      {
        key: "backend",
        url: "https://github.com/fromSian/all-in-one-note-back",
      },
    ],
    descriptions: [
      {
        key: "stack",
      },
      {
        key: "opening",
      },
      {
        key: "account",
        medias: [
          {
            url: "signin.png",
            type: "image",
          },
          {
            url: "signup.png",
            type: "image",
          },
        ],
      },
      {
        key: "note",
        medias: [
          {
            url: "note-empty.png",
            type: "image",
          },
          {
            url: "note-items.png",
            type: "image",
          },
        ],
      },
      {
        key: "show",
        medias: [
          {
            url: "show.png",
            type: "image",
          },
          {
            url: "datetime.png",
            type: "image",
          },
          {
            url: "collaspe.png",
            type: "image",
          },
        ],
      },
    ],
  },
  {
    key: "cim",
    roles: ["frontend"],
    descriptions: [
      {
        key: "stack",
      },
      {
        key: "opening",
      },
    ],
  },
  {
    key: "ydyl",
    roles: ["data", "frontend"],
    descriptions: [
      {
        key: "stack",
      },
      {
        key: "opening",
      },
    ],
  },
  {
    key: "realscene",
    roles: ["frontend"],
    descriptions: [
      {
        key: "stack",
      },
      {
        key: "opening",
      },
    ],
  },
  {
    key: "geoscene",
    roles: ["frontend"],
    descriptions: [
      {
        key: "stack",
      },
      {
        key: "opening",
      },
    ],
  },
  {
    key: "plan",
    roles: ["frontend"],
    descriptions: [
      {
        key: "stack",
      },
      {
        key: "opening",
      },
    ],
  },
] as ProjectItem[];
