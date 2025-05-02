# Souce Code Walkthrough

## Source code repository

- https://github.com/merkle-pay/merkle-pay

## Demo

- https://demo.merklepay.io/pay?amount=1&token=USDT

## File Tree

```sh
 # generate file structure tree to the tree.txt file in root directory
 make tree
```

## Conventions

- Some variable names are all capital, they are either configuration or read-only or both
- Use pages router for pages
- Use app router for apis, since it has a middleware where you can filter requests

## Walkthrough

- pnpm manages the monorepo, which has two apps
  - `merkle-pay`, the path of which is `apps/merkle-pay`
  - `merkle-dashboard`, the path of which is `apps/merkle-dashboard`
- `merkle-pay` is the core of the Merkle Pay project
  - you can define a payment with a url attaching search params, such as amount, token, etc
  - or, you can give people a link so that they can fill the form
  - its apis handle almost all of the logic, because of security reasons
- `merkle-dashboard` is a Reactjs SPA (single page application)
  - allow the owner to manage all payments
  - creating invoice with payment link and qr code
  - listing all payments and tracking their statuses
