import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://github.com/Lcxuan",

  // 文章显示的默认作者
  author: {
    name: "Lcxuan",
    url: "http://8.210.54.206",
  },

  // 使用官方提供的图标库-也可以构建自己的图标库
  iconAssets: "iconfont",

  // 网站图标
  logo: "/logo.png",

  // 导航栏上的个人仓库地址
  repo: "https://github.com/Lcxuan",

  // 自定义仓库链接文字-默认从repo中自动推断为"GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "Gitee",

  // 是否在导航栏内显示仓库链接-默认为true
  repoDisplay: true,

  // 文章所在仓库
  // docsRepo: "https://gitee.com/lcxuan/vuepress-notes.git",

  // 文章所在分支
  // docsBranch: "master",

  // 文章所在目录
  docsDir: "src",

  // 页面显示信息
  pageInfo: ["Category", "Tag", "ReadingTime"],

  // 路径导航
  breadcrumb: true,

  // 路径导航的图标显示
  breadcrumbIcon: true,

  // 用户可以自定义的多主题色
  themeColor: {
    yellow: "#FEC201",
    pink: "#EF699F",
    purple: "#684CCE",
    orange: "#FF8C3D",
  },

  // 暗黑模式切换-在深色模式和浅色模式中切换
  darkmode: "toggle",

  // 全屏按钮
  fullscreen: true,

  // 返回顶部按钮-下滑300px后显示
  backToTop: true,

  // 纯净模式-禁用
  pure: false,

  // 文章的最后更新时间
  lastUpdated: true,

  // 显示页面的贡献者
  contributors: false,

  locales: {
    "/": {
      // 导航栏
      navbar: zhNavbar,

      // 侧边栏
      sidebar: zhSidebar,

      // 全局页脚信息
      footer: "小轩的学习笔记",

      // 显示页脚
      displayFooter: false,

      // page meta
      metaLocales: {
        editLink: "在 Gitee 上编辑此页",
      },
    },
  },

  plugins: {

    // 代码复制功能-vuepress-plugin-copy-code2
    copyCode: {
      // 在移动端也可以实现复制代码
      showInMobile: true,

      // 代码复制成功提示消息的时间-ms
      duration: 3000,

      pure: false,
    },

    // MarkDown文件增强
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
