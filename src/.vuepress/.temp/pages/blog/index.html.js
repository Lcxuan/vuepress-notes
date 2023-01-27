export const data = JSON.parse("{\"key\":\"v-145ac574\",\"path\":\"/blog/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"hero\":true,\"bgImage\":\"/blog_background.jpg\",\"heroFullScreen\":true,\"projects\":[{\"name\":\"DockerHub\",\"link\":\"https://hub.docker.com/\",\"desc\":\"Docker镜像官方下载网站\",\"icon\":\"link\"},{\"name\":\"Maven仓库\",\"link\":\"https://mvnrepository.com/\",\"desc\":\"Jar包的搜索及下载地址\",\"icon\":\"link\"},{\"name\":\"B站\",\"link\":\"https://www.bilibili.com/\",\"desc\":\"让我增长知识的小破站\",\"icon\":\"link\"},{\"name\":\"抖音\",\"link\":\"https://www.douyin.com/\",\"desc\":\"消耗我时间的精神粮食\",\"icon\":\"link\"}],\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0.29,\"words\":86},\"filePathRelative\":\"blog/README.md\",\"autoDesc\":true}")

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
