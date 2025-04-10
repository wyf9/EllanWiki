import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EllanWiki",
  description: "Unofficial Wiki for Ellan.TOP Server / Ellan.TOP 艾尔岚服务器的非官方百科",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        // text: '页面列表',
        items: [
          { text: '主页', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wyf9/EllanWiki' },
      { icon: 'qq', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=xPXM9weTC_b3A5zV-W2wooyNvDftn3h9&authKey=LDFbU7U6Tlv47iWcUJrbb%2FEm7S%2Foki%2BhJDvrACDtB5jmgumCm9MZn5yc5piOgohG&noverify=0&group_code=548292445' }
    ],
    editLink: {
      pattern: 'https://github.com/wyf9/EllanWiki/edit/main/:path',
      text: '在 GitHub 上编辑本文'
    }
  },
  lastUpdated: true,
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '点击展开',
      cautionLabel: '注意',
      importantLabel: '重要',
      noteLabel: '提醒'
    }
  }
})
