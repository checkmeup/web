# app

This folder contains the application layer, which is the top layer of the application. It is responsible for the application's routing, layout, and state management. It is the only layer that can import from any layer below it. The main responsibility of the application layer is to connect the features, entities, and widgets into a single application.

This is the entry point of the application. Nothing should be exported from this layer. In other words, it is responsible for configuration only. Additionally, it can contain global logic, routing, and state management.

## Rules

- Define interfaces in lower layers and implement them in the application layer.
- Define the application's routing and state management.
- Connect features, entities, and widgets.
