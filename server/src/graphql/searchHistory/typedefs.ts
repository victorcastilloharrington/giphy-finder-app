import gql from "graphql-tag";

export default gql(`
type SearchHistory {
  id: ID!
  queryString: String!
  createdAt: String!
  userId: String!
}

type Query {
  searchHistoryList(userId: String!): [SearchHistory!]
}

type Mutation {
  createSearchHistoryEntry(queryString: String!, userId: String!): SearchHistory!
  clearSearchHistory(userId: String!): Boolean!
}
`);
