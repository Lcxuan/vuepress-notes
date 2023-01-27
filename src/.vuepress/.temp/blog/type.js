export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-744a49e5","v-2b78c687","v-8d1bb016","v-34cb6992","v-b03ae20a","v-677cae9d","v-a46fbe6c","v-1ff7fd37","v-056f4c7a","v-5661c88e","v-4edd469a","v-65c1d7f2","v-1665eced","v-538b55ec","v-a8b428d4","v-78e9b099","v-5b551ec1","v-eb3c33d0"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

