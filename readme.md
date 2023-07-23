# Twitter Backend Clone <!-- omit in toc -->

I had built Twitter basic functionalities and created APIs with `Node.js Express` framework using `Sequelize` with `PostgreSQL` database.

The reason behind choosing `PostgreSQL` is because of relationships between tables. We need to structured database schema for the functionalities. We can write complex queries and joins with SQL databases.

## Includes

- **ES6** `import/export` implemented with `type: "module"` in `package.json`
- **Error handling** middlewares implemented
- Code-coverage using Node.js' built in functionality `c8`

## 😊 Prerequisite

- Install `nodemon` globally using below command if not installed already

  ```sh
  npm i -g nodemon
  ```

- **PostgreSQL**

## 🚀 Getting Started

You can download or clone this repo using below command:

```sh
git clone https://github.com/Harsh-Dhorajia/Backend-task.git
```

## ⚙️ Local Setup

- After cloning enter into folder.
- Install dependencies

  ```sh
  npm install
  ```

- Create file called `.env`
- Copy `.env.example` file content `.env` file.

- Run locally

  ```sh
  npm run dev
  ```
## ℹ️ Environment Variables

| Variable           | Description              | Default Value |
| --------           | ------------------------ | ------------- |
| PORT               | Server Port              | `3000`        |
| POSTGRES_HOST      | Database connection host | `localhost`   |
| POSTGRES_PORT      | Database port            | `5432`        |
| POSTGRES_DATABASE  | Database name            | `postgres`    |
| POSTGRES_USERNAME  | Database username        | `postgres`    |
| POSTGRES_PASSWORD  | Database password        | `postgres`    |
| SECRET_KEY         | Database password        | `twitter`     |
| NODE_ENV         | Database password          | `development` |