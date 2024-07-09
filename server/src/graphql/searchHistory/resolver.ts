import { Resolvers } from "../generated/types";
import { searchHistoryListResolver } from "./resolvers/searchHistoryListResolver";

export const searchHistoryResolvers: Resolvers = {
  Query: {
    searchHistoryList: searchHistoryListResolver,
  },
};
