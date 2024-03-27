# web

[![Netlify Status](https://api.netlify.com/api/v1/badges/91b72964-6015-4726-81d1-5b132b898ea1/deploy-status)](https://app.netlify.com/sites/checkmeup/deploys)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/2bd546252d3e417c96ed2fcac4f5d2a2)](https://app.codacy.com/gh/checkmeup/web/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

This is the repository for the CheckMeUp website.

The project use the Feature-Sliced Design methodology and defines the following folders structure:

```sh
└── src/
  ├── app/ # Initializing application logic, contains setup of routing, store and global styles
  ├── pages/ # Application pages, contains the route components for each page in the app, mostly composition, hardly any logic
  ├── widgets/ # Contains the "assembled", independent and self-contained blocks for pages, with content and interactive buttons that are wired up to the relevant calls on the back-end.
  ├── features/ # Processing of user scenarios and interactions
  ├── entities/ # Business entities that domain logic operates
  └── shared/ # Reused modules, non-business specific
```

Any of the `slice` inside of this folders can be separated into segments: `ui`, `model` (store, actions), `api` and `lib` (utils/hooks) or any other according of the requirements of the project.
