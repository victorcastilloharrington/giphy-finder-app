import { MutationResolvers } from "../../generated/types";

export const clearSearchHistoryEntryResolver:
  MutationResolvers["clearSearchHistoryEntry"] = async (_, args, context) => {
    await context.prisma.searchHistory.deleteMany({
      where: {
        userId: args.userId,
      },
    });

    return true;
  };
