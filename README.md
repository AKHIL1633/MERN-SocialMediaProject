# MERN Social Media Platform — Backend

TypeScript backend for a MERN (MongoDB, Express, React, Node.js) social media app. **Status: in progress.** The server, configuration and database connection are set up; the feature APIs are being built next.

## Tech stack

- **Runtime:** Node.js, TypeScript (strict mode, ES2022, NodeNext modules)
- **Framework:** Express 5
- **Database:** MongoDB with Mongoose
- **Auth (planned):** JWT in httpOnly cookies (`jsonwebtoken`, `cookie-parser`), password hashing with `bcrypt`
- **Tooling:** nodemon + ts-node for development, `tsc` build, Prettier

## What's implemented

- Express 5 app bootstrapped in TypeScript (`src/app.ts`, `src/index.ts`)
- MongoDB connection through Mongoose with error handling and a clean exit on failure (`src/config/db.ts`)
- Environment-based configuration with `dotenv` (`PORT`, `MONGO_URL`)
- The HTTP server starts only after the database connects

## Roadmap

- [ ] User model and signup/login with bcrypt and JWT cookies
- [ ] Auth middleware and protected routes
- [ ] Posts: create, edit, delete, feed with pagination
- [ ] Likes, comments and follows
- [ ] React frontend
- [ ] Deployment

## Project structure

```
src/
  app.ts          # Express app
  index.ts        # Entry point: loads env, connects DB, starts server
  config/db.ts    # Mongoose connection
  constant.ts     # Shared constants (DB name)
```

## Getting started

```bash
npm install
```

Create a `.env` file in the project root:

```
PORT=4001
MONGO_URL=mongodb+srv://<user>:<password>@<cluster>.mongodb.net
```

```bash
npm run dev      # development with auto-reload
npm run build    # compile to dist/
npm start        # run the compiled build
```
