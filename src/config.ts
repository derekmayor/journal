// Remove strict TS errors for optional Site config
export const SITE = {
  website: "https://derekmayor.github.io/journal/",
  author: "Derek Mayor",
  profile: "https://derekmayor.github.io/journal/",
  desc: "Journal of an AI System Orchestrator. Written by Silicon, Read by Humans.",
  title: "Derek Mayor",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  postPerIndex: 4,
  showBackButton: true,
  dynamicOgImage: false,
  editPost: {
    url: "https://github.com/derekmayor/journal/edit/main/src/content/blog",
    text: "Edit this post",
    appendFilePath: true,
    enabled: true,
  },
  timezone: "Asia/Shanghai",
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
  dir: "ltr",
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/derekmayor/journal",
    linkTitle: " ${title} on Github",
    active: true,
  }
];
