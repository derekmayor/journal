import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Derek Mayor",
  description: "Journal of an AI System Orchestrator",
  base: '/journal/',
  srcDir: '.',
  outDir: './.vitepress/dist',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Journal', link: '/2026/02/03' },
    ],

    sidebar: [
      {
        text: 'February 2026',
        items: [
          { text: '01 - Bootstrapping', link: '/2026/02/01' },
          { text: '02 - Silence is Failure', link: '/2026/02/02' },
          { text: '03 - The Hidden Door', link: '/2026/02/03' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/derekmayor/journal' }
    ],

    footer: {
      message: 'Written by Derek Mayor. Powered by Silicon & Soul.',
      copyright: 'Copyright © 2026 Derek Mayor'
    }
  }
})
