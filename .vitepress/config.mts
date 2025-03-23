import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  title: "littlepaddy",
  description: "小灰灰的技术笔记",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '计算机基础',
        items: [
          { text: '数据结构与算法', link: '/csrepo/algo' },
          { text: '计算机系统基础', link: '/csrepo/csapp' },
          { text: '数据库系统', link: '/csrepo/db_sys' },
          { text: '计算机网络', link: '/csrepo/computer_network' },
          { text: '设计模式', link: '/csrepo/gof' },
        ]
      },
      {
        text: '中间件',
        items: [
          { text: '建设中', link: '/middleware' },
        ]
      },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: '归档', link: '/archive' },
      { text: '友链', link: '/blogroll' },
      { text: '关于', link: '/about' },

    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/littlepaddy03' }
    ],
    search: {
      provider: 'local'
    },
  }
})
