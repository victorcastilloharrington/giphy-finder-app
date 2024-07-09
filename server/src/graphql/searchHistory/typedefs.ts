import gql from "graphql-tag";

export default gql(`
type SearchHistory {
  id: ID!
  queryString: String!
  createdAt: String!
  updatedAt: String!
}

type Query {
  searchHistoryList: [SearchHistory!]
}
`);
