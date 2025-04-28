import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude],
      root: fileURLToPath(new URL('./', import.meta.url)),
      reporters: ['html', 'default'],
      outputFile: 'preview/index.html',
      coverage: {
        enabled: true,
        provider: 'istanbul',
        reporter: ['text', 'html'],
        reportsDirectory: 'preview/coverage',
        exclude: [
          'node_modules/**',
          'tests/**',
          'src/**/index.ts',
          'src/main.ts',
          'src/**/types.ts',
          '**/*.d.ts',
          '**/*.spec.ts',
          'preview/**',
          'dist/**',
          '*.config.ts',
        ],
      },
    },
  }),
)
