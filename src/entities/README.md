# entities

This layer contains domain and business abstract entities. Entities are the core of the application, they represent the data and the business logic of the application. Entities are the most stable part of the application.

## Subfolders

Each entity should be separated by its own folder.

- `assets` - static assets related to the entity
- `model` - data models and business logic, including types, repositories and stores
- `ui` - UI components related to the entity

## Rules

- Define domain entities in terms of business.
- Define basic data patterns for usage in features.
- Define stores, containing simple basic CRUD logic. Factory is preferable to Singleton.
- Contains reusable UI components. Actively use slots and props.
- Can't be cross-referenced; connections should be realized in upper layers or by entities merging when possible.
