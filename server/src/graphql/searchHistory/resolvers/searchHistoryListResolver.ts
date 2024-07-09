import { QueryResolvers } from "../../generated/types";

export const searchHistoryListResolver: QueryResolvers["searchHistoryList"] =
  async () => {
    return [{
      id: "asdf",
      queryString: "cat",
      createdAt: "222",
      updatedAt: "333",
    }];
  };
