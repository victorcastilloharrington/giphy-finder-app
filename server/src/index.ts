// The ApolloServer constructor requires two parameters: your schema

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

import searchHistoryTypeDefs from "./graphql/searchHistory/typedefs";
import { searchHistoryResolvers } from "./graphql/searchHistory/resolver";
import { PrismaClient } from "@prisma/client";

async function startApolloServer() {
  const prisma = new PrismaClient();

  const server = new ApolloServer({
    schema: makeExecutableSchema({
      typeDefs: [searchHistoryTypeDefs],
      resolvers: mergeResolvers([searchHistoryResolvers]),
    }),
  });
  const { url } = await startStandaloneServer(server, {
    context: async () => ({ prisma }),
  });

  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
