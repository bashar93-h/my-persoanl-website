import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  title: "Bashar Abdulaziz CV",
  description: "Software Engineering Student",
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about.html" },
      { text: "Skills", link: "/skills.html" },
      { text: "Projects", link: "/projects.html" },
    ],
    sidebar: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about.html" },
      { text: "Skills", link: "/skills.html" },
      { text: "Projects", link: "/projects.html" },
    ],
    sidebarDepth: 2, // shows headers within pages
  }),
  base: "/my-persoanl-website/",
});
