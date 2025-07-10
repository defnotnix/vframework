import { _nav as navMain } from "./nav_main";

export const navs = {
  navMain,
};

export const navModules = [
  {
    label: "General",
    url: "/",
    subModules: navMain,
  },
];
