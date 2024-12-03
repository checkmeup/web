# shared

This folder contains shared infrastructure code used by all other layers, including helpers, wrappers, and utilities that are stable and not specific to any feature or domain.

## Subfolders

- `lib` - wrappers around 3rd party libraries
- `ui` - wrappers around basic UI components, application UI kit, and design system components
- `api` - helpers for working with APIs

## Rules

- Cross imports are allowed as shared code should be stable.
- Public API files (index.ts) are optional and can be defined where encapsulation is needed.
- No business logic.
- Can define interfaces and contexts used and implemented by upper layers.
- Avoid defining "barrel" files that export everything from the folder.
- Can contain CSS variables initialized at the app layer.
