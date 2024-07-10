import { Resolvers } from "../generated/types";
import { searchHistoryListResolver } from "./resolvers/searchHistoryListResolver";
import { createSearchHistoryEntryResolver } from "./resolvers/createSearchHistoryEntryResolver";
import { clearSearchHistoryEntryResolver } from "./resolvers/clearSearchHistoryResolver";

export const searchHistoryResolvers: Resolvers = {
  Query: {
    searchHistoryList: searchHistoryListResolver,
  },
  Mutation: {
    createSearchHistoryEntry: createSearchHistoryEntryResolver,
    clearSearchHistory: clearSearchHistoryEntryResolver,
  },
};
