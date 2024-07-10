import { MutationResolvers } from "../../generated/types";

export const createSearchHistoryEntryResolver:
  MutationResolvers["createSearchHistoryEntry"] = async (_, args, context) => {
    return context.prisma.searchHistory.create({
      data: {
        queryString: args.queryString,
        userId: args.userId,
      },
    });
  };
