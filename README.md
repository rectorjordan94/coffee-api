# Soda API

Deployment link: https://dreamy-pavlova-642e0a.netlify.app/

This api will allow the users of our react front-end application to CRUD sodas

This application uses token authentication instead of sessions.

## Resources

### Sodas

##### Routes Table

| Verb   | URI Pattern    | Controller#Action  |
|--------|----------------|--------------------|
| GET    | `/sodas`       | `sodas#index`      |
| GET    | `/sodas/:id`   | `sodas#show`       |
| POST   | `/sodas`       | `sodas#create`     |
| PATCH  | `/sodas/:id`   | `sodas#update`     |
| DELETE | `/sodas/:id`   | `sodas#delete`     |

### Users

##### Routes Table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |
