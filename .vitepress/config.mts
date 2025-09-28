import { defineConfig } from 'vitepress'
import tailwind from '@tailwindcss/vite'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'src',
  title: 'checkmeup.net',
  description:
    "Dead man's switch monitoring for cron jobs - get instant alerts when your automated tasks fail so you sleep soundly knowing systems are protected.",
  themeConfig: {
    logo: '/assets/logo.svg',
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/getting-started' },
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Getting started', link: '/docs/getting-started' },
          { text: 'Runtime API Examples', link: '/docs/api-examples' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/checkmeup' }],
    footer: {
      copyright: 'Copyright © 2025 CheckMeUp',
    },
  },
  vite: { plugins: [tailwind()] },
})
