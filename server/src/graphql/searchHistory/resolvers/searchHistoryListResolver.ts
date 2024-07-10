import { QueryResolvers } from "../../generated/types";

export const searchHistoryListResolver: QueryResolvers["searchHistoryList"] =
  async (req, res, context) => {
    return context.prisma.searchHistory.findMany();
  };
