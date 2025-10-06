export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"C:/Users/ASB/Desktop/my-personal-website/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"About Me"} }],
  ["/projects.html", { loader: () => import(/* webpackChunkName: "projects.html" */"C:/Users/ASB/Desktop/my-personal-website/docs/.vuepress/.temp/pages/projects.html.js"), meta: {"title":"Projects"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/ASB/Desktop/my-personal-website/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Bashar Abdulaziz — Software Engineering Student"} }],
  ["/skills.html", { loader: () => import(/* webpackChunkName: "skills.html" */"C:/Users/ASB/Desktop/my-personal-website/docs/.vuepress/.temp/pages/skills.html.js"), meta: {"title":"Skills"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/ASB/Desktop/my-personal-website/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
