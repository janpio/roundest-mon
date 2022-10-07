import * as trpc from "@trpc/server";
import { z } from "zod";

export const appRouter = trpc
  .router()
  .query("get-pokemon-pair", {
    async resolve() {
      return {"firstPokemon":{"id":2,"name":"ivysaur","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},"secondPokemon":{"id":129,"name":"magikarp","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"}};
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
