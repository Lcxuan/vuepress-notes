import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // 代码笔记的侧边栏
  "/codenotes/": [
    {
      text: "Java核心",
      icon: "java",
      collapsible: true,
      prefix: "/codenotes/javacore/",
      children: [
        {
          text: "Java基础-面向对象",
          icon: "write",
          link: "Java基础-面向对象.md",
        },
        {
          text: "Java基础-泛型机制",
          icon: "write",
          link: "Java基础-泛型机制.md",
        },
        {
          text: "Java基础-注解机制",
          icon: "write",
          link: "Java基础-注解机制.md",
        },
        {
          text: "Java基础-异常机制",
          icon: "write",
          link: "Java基础-异常机制.md",
        },
        {
          text: "Java基础-反射机制",
          icon: "write",
          link: "Java基础-反射机制.md",
        },
        {
          text: "Java集合-类关系图",
          icon: "write",
          link: "Java集合-类关系图.md",
        },
        {
          text: "Java集合-ArrayList",
          icon: "write",
          link: "Java集合-ArrayList.md",
        },
        {
          text: "Java8新特性",
          icon: "write",
          link: "Java8新特性.md",
        },
        {
          text: "Java中的SPI机制",
          icon: "write",
          link: "Java中的SPI机制.md",
        },
      ],
    },
  ],
});
