# widgets

Widgets and pages forms the UI layer of the application. Widgets are reusable components that can be used in multiple pages. They are not tied to any specific feature or use case. They are the building blocks of the application.

## Subfolders

Each widget can be separated by its own folder.

- `assets` - contains static assets related to the widget
- `ui` - contains UI components that can be used in the application
- `model` - contains types and interfaces used by the widgets

## Rules

- Should have a flat structure
- Widgets should be reusable and not tied to any specific feature
- Contains UI logic, but no business logic
- Widgets should be avoided when possible
- Can't be cross-referenced
