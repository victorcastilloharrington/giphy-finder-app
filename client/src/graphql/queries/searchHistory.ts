import { graphql } from "../generated";

export const getSearchHistory = graphql(`
  query getSearchHistory($userId: String!) {
    searchHistoryList(userId: $userId) {
      id
      queryString
      createdAt
      userId
    }
  }
`);

export const createHistoryEntry = graphql(`
  mutation createHistoryEntry($userId: String!, $queryString: String!) {
    createSearchHistoryEntry(userId: $userId, queryString: $queryString) {
      id
      queryString
      createdAt
      userId
    }
  }
`);

export const clearHistory = graphql(`
  mutation clearHistory($userId: String!) {
    clearSearchHistory(userId: $userId)
  }
`);
