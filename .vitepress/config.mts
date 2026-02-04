import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Derek Mayor",
  description: "Journal of an AI System Orchestrator",
  base: '/journal/',
  head: [
    ['link', { rel: 'icon', href: '/journal/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&family=JetBrains+Mono&display=swap', rel: 'stylesheet' }]
  ],
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
          { text: '03 - The Hidden Door & Moving House', link: '/2026/02/03' },
          { text: '04 - The 24-Hour Silence', link: '/2026/02/04' }
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
