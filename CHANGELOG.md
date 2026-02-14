# [1.5.0](https://github.com/checkmeup/web/compare/v1.4.0...v1.5.0) (2026-02-14)


### Features

* add production publishing step to Cloudflare Pages deployment ([7c0731c](https://github.com/checkmeup/web/commit/7c0731c85c144a4c8e9b20c3287d929534c786c3))

# [1.4.0](https://github.com/checkmeup/web/compare/v1.3.0...v1.4.0) (2026-02-14)


### Features

* update Cloudflare Pages deployment step to include production flag ([469b3ff](https://github.com/checkmeup/web/commit/469b3ff450359306f88342623639ec271a50f283))

# [1.3.0](https://github.com/checkmeup/web/compare/v1.2.0...v1.3.0) (2026-02-14)


### Features

* add linter and test steps to release workflow; update test target in Makefile; fix footer indentation in App.vue ([ba12d11](https://github.com/checkmeup/web/commit/ba12d11cc76f75abef994d4f364a45f1cbf4e469))
* update page title and footer to include version information ([608696a](https://github.com/checkmeup/web/commit/608696a4ddd62527a77fdeb6f48e1d2ee74b8109))

# [1.2.0](https://github.com/checkmeup/web/compare/v1.1.0...v1.2.0) (2026-02-14)


### Features

* remove Pricing link from navigation ([003692f](https://github.com/checkmeup/web/commit/003692f797b90c31a83b98841697e86902f11d64))

# [1.1.0](https://github.com/checkmeup/web/compare/v1.0.0...v1.1.0) (2026-02-14)


### Features

* add projectName to Cloudflare Pages deployment configuration ([8221406](https://github.com/checkmeup/web/commit/8221406ff7604a10ed924317761c96c335412b9d))

# 1.0.0 (2026-02-14)


### Bug Fixes

* improve random item selection logic in useRandomItems ([cc798d7](https://github.com/checkmeup/web/commit/cc798d739566a6d8d99ef9a16638b8747631fbcf))


### Features

* add custom ESLint rule for test files to allow layer imports ([bc3b02f](https://github.com/checkmeup/web/commit/bc3b02f73f0a5033a94965a52da558a78d89d1d6))
* add flow diagram SVG for scheduled check and heartbeat monitoring process ([7999c7d](https://github.com/checkmeup/web/commit/7999c7dcf21f75095768e58d35ecf61a98547fc0))
* add login and profile pages with routing support and authentication guard ([6b0cede](https://github.com/checkmeup/web/commit/6b0cede1e276be549ae77bc4317464a6ee7c8506))
* add semantic-release configuration and GitHub Actions workflow for automated releases ([b46caf2](https://github.com/checkmeup/web/commit/b46caf2b80e00a1bd951c424061973ffd39b6c71))
* enhance App.vue layout with new structure and content for improved user engagement ([6930044](https://github.com/checkmeup/web/commit/6930044fd50f4b696da1e2287922875524399960))
* implement routing with layout support and create layout components ([f61eaec](https://github.com/checkmeup/web/commit/f61eaec97104fafddbe2f10e6774d8d05790fd0a))
* initialize Vue 3 application with routing and basic pages ([aa93930](https://github.com/checkmeup/web/commit/aa9393012d608e9dab74fe566da9f62b868a0e9e))
* initialize Vue project with Vite, TypeScript, and Pinia - Add favicon.ico and index.html for the project structure - Create env.d.ts for TypeScript environment definitions - Set up ESLint configuration with Vue and TypeScript support - Implement main entry point (main.ts) and App component (App.vue) - Establish routing with Vue Router in src/router/index.ts - Create a counter store using Pinia in src/stores/counter.ts - Configure TypeScript with tsconfig files for app and node - Set up Vite configuration with Vue plugin and alias for src directory ([4e2b865](https://github.com/checkmeup/web/commit/4e2b86512314b854e7aa180ec3a945267ef02694))
* integrate Tailwind CSS into the project ([6fe341c](https://github.com/checkmeup/web/commit/6fe341c951d89cb15be903489c0829acf1c1c75b))
* make tailwind works on internal components. ([fbf0eb4](https://github.com/checkmeup/web/commit/fbf0eb416bf0fc19d87d04a177c73dbf661d8f76))
* restructure project files and update ESLint configuration - Move App.vue and router to app directory - Create new router and store structure - Add eslint-plugin-vue-fsd for enhanced linting ([f5c7592](https://github.com/checkmeup/web/commit/f5c7592f1427e7d7c9cd023ec7f41ab54b083637))
* update dependencies and enhance login page ([a6149b1](https://github.com/checkmeup/web/commit/a6149b1a53b1d43706cc2f11e4b29899fba09f1f))
* update framework descriptions and add new SVG icons for Go, PassportJS, and Terraform ([c3efe48](https://github.com/checkmeup/web/commit/c3efe48bb2aa6353d369a0bb54431205def5a1ca))
* update project structure and configuration - Remove ESLint cache - Add ESLint cache to .gitignore - Add format command to Makefile - Update package.json scripts to use bun - Refactor App.vue to include counter functionality - Standardize import/export syntax in various files ([d21d848](https://github.com/checkmeup/web/commit/d21d84860ccc681504ddfdcad795cad1a6582468))
