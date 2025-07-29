# Documentation

## Tech Stack

- **Frontend**: React.js, TypeScript, Shadcn, Tailwind CSS
- **Backend**: Express.js, Node.js, Drizzle, PostgreSQL

## System Overview

- High-Level Architecture: [View Diagram](#)

## API Reference

- Postman collection: [View Collection](#)

## Getting Started

Follow these steps to run the project locally

1. #### Clone repository:

```shell
# Using HTTPS
git clone https://github.com/darianmorat/ticsor-app.git
cd ticsor-app

# Or using SSH
git clone git@github.com:darianmorat/ticsor-app.git
cd ticsor-app
```

2. #### Install dependencies:

```shell
# Frontend
cd client && npm run install

# Backend
cd ../server && npm run install
```

3. #### Configure env variables:

```shell
# Frontend
# Create a `.env` file in the /client directory with the following:
VITE_SERVER_URL=http://localhost:3000

# Backend
# Create a `.env` file in the /server directory with the following:
PORT=3000
CLIENT_URL=http://localhost:5173
DATABASE_URL=<your_neon_database_url>
JWT_SECRET=<your_jwt_secret>
NODE_ENV=development
```

4. #### Database setup:

```shell
# The schema is managed with Drizzle ORM. To push the schema:
cd server
npm run db:generate
npm run db:migrate
npm run db:seed # Optional
```

5. #### Run server:

```shell
# Frontend
cd client && npm run dev

# Backend
cd ../server && npm run dev
```
