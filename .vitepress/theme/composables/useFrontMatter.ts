import { useData } from 'vitepress/client'
import type { DefaultTheme } from 'vitepress'

export function useFrontMatter() {
  const { frontmatter } = useData<DefaultTheme.Config>()

  return frontmatter
}
