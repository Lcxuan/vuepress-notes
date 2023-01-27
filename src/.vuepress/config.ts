import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "小轩的学习笔记",
      description: "熬过最苦的日子，做最酷的自己",
    },
  },

  theme,

  plugins: [
    // 注册全局组件的插件
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),

    searchPlugin({
      //多语言支持
      locales: {
        "/": {
          placeholder: "搜索本站",
        },
      },
      // 排除首页
      isSearchable: (page) => page.path !== '/',
    }),
  ],

  shouldPrefetch: false,
});
