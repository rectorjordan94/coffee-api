# Coffee API

This api will allow the users of our react front-end application to CRUD coffees

This application uses token authentication instead of sessions.

## Resources

### Coffees

##### Routes Table

| Verb   | URI Pattern    | Controller#Action    |
|--------|----------------|----------------------|
| GET    | `/coffees`     | `coffees#index`      |
| GET    | `/coffees/:id` | `coffees#show`       |
| POST   | `/coffees`     | `coffees#create`     |
| PATCH  | `/coffees/:id` | `coffees#update`     |
| DELETE | `/coffees/:id` | `coffees#delete`     |

### Users

##### Routes Table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |
