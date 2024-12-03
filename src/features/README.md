# Features

Features represent use-cases, actions that users or the system can perform within the application. Initially, UI and model can be combined in one file, but they should be separated as the application grows in complexity.

## Subfolders

Features are the active layer of the application and contain use cases. They can be organized into folders. These folders may contain simple files with feature logic or more complex structures with subfolders.

## Rules

- Define all actions in business terms.
- Control entity instantiation within application boundaries.
- Group features into folders based on application logic.
- Include UI components related to the feature, such as forms, modals, and buttons.
- Manage local states of edit forms.
- Include feature slices like `create`, `update`, `delete`, `list`, etc.
- Cross-referencing is prohibited; use "duck typing" instead. Do not apply the DRY principle to features.
