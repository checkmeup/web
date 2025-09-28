// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import HomeBody from './components/HomeBody.vue'
import HomeContainer from './components/HomeContainer.vue'
import HomeFrameworks from './components/HomeFrameworks.vue'
import Frameworks from './components/Frameworks.vue'
import ExternalLink from './components/Link.vue'
import ButtonBadge from './components/ButtonBadge.vue'
import LazyLoadObserver from './directives/lazyLoadObserver'

import './tailwind.css'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-features-after': () => h(HomeBody),
    })
  },
  enhanceApp({ app }) {
    app.component('HomeBody', HomeBody)
    app.component('HomeContainer', HomeContainer)
    app.component('HomeFrameworks', HomeFrameworks)
    app.component('Frameworks', Frameworks)
    app.component('ExternalLink', ExternalLink)
    app.component('ButtonBadge', ButtonBadge)

    app.directive('lazyload-observer', LazyLoadObserver)
  },
} satisfies Theme
