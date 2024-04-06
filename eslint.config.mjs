import pluginJs from '@eslint/js';
export default [
  pluginJs.configs.recommended,
  {
    files: ['**/*.js'],
    ignores: ['!**/node_modules/**'],
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
];
