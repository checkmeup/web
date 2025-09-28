---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Sleep easy with instant cron alerts'
  text: ''
  tagline: Dead man's switch monitoring for cron jobs - get instant alerts when your automated tasks fail so you sleep soundly knowing systems are protected.
  image:
    src: /assets/undraw_checking-boxes_j0im.svg
    alt: VitePress
  actions:
    - theme: brand
      text: Getting Started
      link: /docs/getting-started
    - theme: alt
      text: Check out the API
      link: docs/api-examples

features:
  - title: Cron Jobs
    icon:
      src: '/assets/calendar-sync.svg'
    details: Keep your scheduled tasks honest — instantly. CheckMeUp is the perfect dead‑man’s‑switch for cron jobs and cron‑like schedulers. Configure a check and get notified the moment a job fails or misses its run so silent failures don’t derail your systems.
  - title: Live Heartbeat
    icon:
      src: '/assets/heart-pulse.svg'
    details: Monitor your servers with ease. CheckMeUp provides lightweight, hassle-free monitoring for your server infrastructure. Send a lightweight periodic ping from any device to ensure everything is running smoothly.
  - title: Alerting
    icon:
      src: '/assets/siren.svg'
    details: Stay informed with real-time alerts. CheckMeUp delivers instant notifications for monitored tasks so you never miss critical events. Flexible alert channels (email, SMS, Slack, webhook) let you route alerts to your team.
  - title: Status Pages
    icon:
      src: '/assets/flame.svg'
    details: Keep stakeholders informed with public status pages. CheckMeUp builds customizable, real-time health pages showing service status. Share them with teams or customers to increase transparency, trust and uptime visibility.

members:
  - avatar: 'https://www.github.com/yyx990803.png'
    name: 'Evan You'
    title: 'Creator'
    links:
      - icon: 'github'
        link: 'https://github.com/yyx990803'
      - icon: 'twitter'
        link: 'https://twitter.com/youyuxi'
frameworks:
  - title: Node.js
    href: https://nodejs.org/
    src: /assets/icons/nodejs.png
---
