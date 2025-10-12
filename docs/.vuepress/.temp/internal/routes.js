export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"C:/Users/ASB/Desktop/my-personal-website/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"About Me"} }],
  ["/projects.html", { loader: () => import(/* webpackChunkName: "projects.html" */"C:/Users/ASB/Desktop/my-personal-website/docs/.vuepress/.temp/pages/projects.html.js"), meta: {"title":"Projects"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/ASB/Desktop/my-personal-website/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Bashar Abdulaziz — Software Engineering Student"} }],
  ["/skills.html", { loader: () => import(/* webpackChunkName: "skills.html" */"C:/Users/ASB/Desktop/my-personal-website/docs/.vuepress/.temp/pages/skills.html.js"), meta: {"title":"Skills"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/ASB/Desktop/my-personal-website/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
