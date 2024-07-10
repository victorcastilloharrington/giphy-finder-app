## Fullstack HR Application

### Description

The following is an app suite with the purpose of showcasing individual
fullstack skills in several technologies.

It consists of the following apps:

- Frontend app in React Vite (Apollo Graphql Client, Graphql Codegen, Tailwindcss)
- Backend Graphql API in Apollo Graphql Server (Prisma ORM, Apollo Graphql, Graphql Codegen)
- Relational Database (SQLite)

The app suite shows a search bar on startup that allows to search for Gif using the Giphy API.
Results are paginated and a record is saved of each search executed via the Graphql API.

The app allows users to delete their search history.

### Technical Walkthrough

The app suite is split into `client` and `server` apps.

- To run, execute `yarn dev` inside each folder

- access the frontend app through `http://localhost:5173/`
- access the graphql api through `http://localhost:4000/`

## Setup

- Simply run `yarn` in each folder to install dependencies.

