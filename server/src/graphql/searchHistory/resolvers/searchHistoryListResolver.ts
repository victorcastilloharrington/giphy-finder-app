import { QueryResolvers } from "../../generated/types";

export const searchHistoryListResolver: QueryResolvers["searchHistoryList"] =
  async (_, __, context) => {
    return context.prisma.searchHistory.findMany();
  };
