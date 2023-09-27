import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://astro-paper.pages.dev/",
  author: "uhq9e",
  desc: "用来放置一些发想和小玩意的地方。",
  title: "若千人的末路",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["zh-CN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    icon: "github",
    href: "https://github.com/uhq9e",
    active: true,
  },
  {
    icon: "twitter",
    href: "https://twitter.com/uhq9e_wkck",
    active: true,
  },
  {
    icon: "bilibili",
    href: "https://space.bilibili.com/1112878610",
    active: true,
  },
];
