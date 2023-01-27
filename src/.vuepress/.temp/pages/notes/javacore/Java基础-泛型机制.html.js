export const data = JSON.parse("{\"key\":\"v-67aff7aa\",\"path\":\"/notes/javacore/Java%E5%9F%BA%E7%A1%80-%E6%B3%9B%E5%9E%8B%E6%9C%BA%E5%88%B6.html\",\"title\":\"Java泛型机制\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Java泛型机制\",\"icon\":\"write\",\"category\":[\"Java\"],\"tag\":[\"Java\"],\"sticky\":false,\"star\":false,\"article\":true,\"timeline\":true,\"description\":\"前言 Java泛型这个特性是从JDK 1.5才开始加入的，因此为了兼容之前的版本，Java泛型的实现采取了“伪泛型”的策略，即Java在语法上支持泛型，但是在编译阶段会进行所谓的“类型擦除”（Type Erasure），将所有的泛型表示（尖括号中的内容）都替换为具体的类型（其对应的原生态类型），就像完全没有泛型一样。 为什么会引入泛型 泛型的本质是为了参数化类型，也就是说在泛型使用过程中，操作的数据类型被指定为一个参数，这种参数类型可以用在类、接口和方法中，分别被称为泛型类、泛型接口、泛型方法。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/notes/javacore/Java%E5%9F%BA%E7%A1%80-%E6%B3%9B%E5%9E%8B%E6%9C%BA%E5%88%B6.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"小轩的学习笔记\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Java泛型机制\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"前言 Java泛型这个特性是从JDK 1.5才开始加入的，因此为了兼容之前的版本，Java泛型的实现采取了“伪泛型”的策略，即Java在语法上支持泛型，但是在编译阶段会进行所谓的“类型擦除”（Type Erasure），将所有的泛型表示（尖括号中的内容）都替换为具体的类型（其对应的原生态类型），就像完全没有泛型一样。 为什么会引入泛型 泛型的本质是为了参数化类型，也就是说在泛型使用过程中，操作的数据类型被指定为一个参数，这种参数类型可以用在类、接口和方法中，分别被称为泛型类、泛型接口、泛型方法。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Java\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Java泛型机制\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[]},{\"level\":2,\"title\":\"为什么会引入泛型\",\"slug\":\"为什么会引入泛型\",\"link\":\"#为什么会引入泛型\",\"children\":[]}],\"readingTime\":{\"minutes\":3.83,\"words\":1149},\"filePathRelative\":\"notes/javacore/Java基础-泛型机制.md\",\"excerpt\":\"<h2> 前言</h2>\\n<p>Java泛型这个特性是从JDK 1.5才开始加入的，因此为了兼容之前的版本，Java泛型的实现采取了“<strong>伪泛型</strong>”的策略，即Java在语法上支持泛型，但是在编译阶段会进行所谓的“<strong>类型擦除</strong>”（Type Erasure），将所有的泛型表示（尖括号中的内容）都替换为具体的类型（其对应的原生态类型），就像完全没有泛型一样。</p>\\n<h2> 为什么会引入泛型</h2>\\n<blockquote>\\n<p>泛型的本质是为了参数化类型，也就是说在泛型使用过程中，操作的数据类型被指定为一个参数，这种参数类型可以用在类、接口和方法中，分别被称为泛型类、泛型接口、泛型方法。</p>\\n</blockquote>\",\"autoDesc\":true}")

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
