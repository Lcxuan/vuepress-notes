import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("FlipClock", defineAsyncComponent(() => import("/Users/lcxuan/blog/vuepress-notes/src/.vuepress/components/FlipClock.vue"))),
      app.component("FlipItem", defineAsyncComponent(() => import("/Users/lcxuan/blog/vuepress-notes/src/.vuepress/components/FlipItem.vue"))),
      app.component("MyFlipClock", defineAsyncComponent(() => import("/Users/lcxuan/blog/vuepress-notes/src/.vuepress/components/MyFlipClock.vue"))),
      app.component("NavCard", defineAsyncComponent(() => import("/Users/lcxuan/blog/vuepress-notes/src/.vuepress/components/NavCard.vue"))),
      app.component("QuickNav", defineAsyncComponent(() => import("/Users/lcxuan/blog/vuepress-notes/src/.vuepress/components/QuickNav.vue")))
  },
}
