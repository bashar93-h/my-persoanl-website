import comp from "C:/Users/ASB/Desktop/my-personal-website/docs/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"About Me\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1759723213000,\"contributors\":[{\"name\":\"Bashar\",\"username\":\"Bashar\",\"email\":\"basharabulaziz25@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Bashar\"}],\"changelog\":[{\"hash\":\"7b4be88c3be2aa2d41743d3d1e7ea66c5f7929d9\",\"time\":1759723213000,\"email\":\"basharabulaziz25@gmail.com\",\"author\":\"Bashar\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"about.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
