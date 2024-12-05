import { defineConfig } from 'steiger'
import fsd from '@feature-sliced/steiger-plugin'

export default defineConfig([
  ...fsd.configs.recommended,
  {
    files: ['./src/shared/**'],
    rules: {
      'fsd/public-api': 'off',
      'fsd/segments-by-purpose': 'off',
      'fsd/no-public-api-sidestep': 'off',
    },
  },
  {
    files: ['./src/features/**', './src/entities/**'],
    rules: {
      'fsd/no-segmentless-slices': 'off',
    },
  },
])
