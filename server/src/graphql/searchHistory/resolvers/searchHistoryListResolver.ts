import { QueryResolvers } from "../../generated/types";

export const searchHistoryListResolver: QueryResolvers["searchHistoryList"] =
  async (_, args, context) => {
    return context.prisma.searchHistory.findMany({
      where: { userId: args.userId },
    });
  };
