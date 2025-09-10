import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "qd的博客",
  description: "记录一些笔记",
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: "随笔",
        items: [
          {
            items: [
              { text: "vr实践", link: "/docs/vr" },
              { text: "消息推送", link: "/docs/消息推送" },
              { text: "VueTreeselect 控件问题", link: "/docs/VueTreeselect 控件问题" },
              { text: "vue使用附件必选校验的问题", link: "/docs/vue使用附件必选校验的问题" },
              { text: "闭包", link: "/docs/闭包" },
              { text: "防抖与节流", link: "/docs/防抖与节流" },
              { text: "小程序横竖屏转换", link: "/docs/小程序横竖屏转换" },
              { text: "JS筛选", link: "/docs/JS筛选" },
              { text: "JS数组筛选", link: "/docs/JS数组筛选" },
              { text: "v-cloak", link: "/docs/v-cloak" },
              { text: "v-if与v-for冲突", link: "/docs/v-if与v-for冲突" },
              { text: "vue复制问题", link: "/docs/vue复制问题" },
              { text: "wx-login", link: "/docs/wx-login" },
              { text: "mqtt使用", link: "/docs/mqtt" },
            ],
          }
        ],
      },
    ],

    sidebar: {
      "/docs/": [
        {
          text: "随笔",
          items: [
            {
              items: [
                { text: "vr实践", link: "/docs/vr" },
                { text: "消息推送", link: "/docs/消息推送" },
                { text: "VueTreeselect 控件问题", link: "/docs/VueTreeselect 控件问题" },
                { text: "vue使用附件必选校验的问题", link: "/docs/vue使用附件必选校验的问题" },
                { text: "闭包", link: "/docs/闭包" },
                { text: "防抖与节流", link: "/docs/防抖与节流" },
                { text: "小程序横竖屏转换", link: "/docs/小程序横竖屏转换" },
                { text: "JS筛选", link: "/docs/JS筛选" },
                { text: "JS数组筛选", link: "/docs/JS数组筛选" },
                { text: "v-cloak", link: "/docs/v-cloak" },
                { text: "v-if与v-for冲突", link: "/docs/v-if与v-for冲突" },
                { text: "vue复制问题", link: "/docs/vue复制问题" },
                { text: "wx-login", link: "/docs/wx-login" },
                 { text: "mqtt使用", link: "/docs/mqtt" },
              ],
            }
          ],
        },
        
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
