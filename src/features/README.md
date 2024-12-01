# features

Features - это use-case, это то, что пользователь или сама система могут делать с приложением.
На начальных этапах можно держать ui и model в одном файле, но при увеличении сложности приложения, их стоит разделить.
В данном случае auth и user - это не слайсы, а просто части пути для группировки слайсов

- auth

  - check-sign-in.ts - слайс
  - sign-in-user.ts - слайс
  - sign-out.ts - слайс

- user
  - create
    - ui
    - create-user-form.ts
    - index.ts
  - remove - index.ts
