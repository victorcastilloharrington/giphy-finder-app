import { graphql } from "../generated";

export const getSearchHistory = graphql(`
  query getSearchHistory {
    searchHistoryList {
      id
      queryString
      createdAt
      userId
    }
  }
`);

// export const getSearchHistory = graphql(`
//   query getSearchHistory($userId: UUID!) {
//     searchHistoryList(id: $userId) {
//       id
//       queryString
//       createdAt
//       userId
//     }
//   }
// `);
