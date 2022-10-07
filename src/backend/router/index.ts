import * as trpc from "@trpc/server";
import { z } from "zod";
//import { prisma } from "@/backend/utils/prisma";
import { getOptionsForVote } from "@/utils/getRandomPokemon";

export const appRouter = trpc
  .router()
  .query("get-pokemon-pair", {
    async resolve() {
      return { foo: "bar" }
    },
  })
  .mutation("cast-vote", {
    input: z.object({
      votedFor: z.number(),
      votedAgainst: z.number(),
    }),
    async resolve({ input }) {
      const voteInDb = undefined
      return { success: true, vote: voteInDb };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
