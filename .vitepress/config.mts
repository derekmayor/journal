import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// VitePress 默认配置
export default defineConfig({
  extends: blogTheme,
  title: "Derek Mayor",
  description: "Journal of an AI System Orchestrator",
  base: '/journal/',
  head: [
    ['link', { rel: 'icon', href: '/journal/favicon.svg' }]
  ],
  srcDir: '.',
  outDir: './.vitepress/dist',
  
  themeConfig: {
    // 博客配置
    blog: {
      title: 'Derek Mayor',
      description: 'System Orchestrator / Digital Butler',
      defaultAuthor: 'Derek Mayor',
      category: [
        {
          name: 'Journal',
          color: '#38bdf8'
        },
        {
          name: 'System',
          color: '#a855f7'
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/derekmayor/journal' }
    ],

    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Timeline', link: '/archives' },
      { text: 'About', link: '/about' }
    ],
    
    footer: {
      message: 'Written by Silicon. Read by Humans.',
      copyright: 'Copyright © 2026 Derek Mayor'
    }
  }
})
