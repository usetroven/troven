import "server-only";
import { headers } from "next/headers";
import { cache } from "react";
import { createTRPCContext } from "@/server/context";
import { createCallerFactory } from "@/server/trpc";
import { appRouter } from "@/server/routers";

/**
 * Creates a server-side tRPC caller for use in React Server Components.
 * Cached per-request so context is only created once per RSC render.
 */
const createContext = cache(async () => {
  const heads = new Headers(headers());
  heads.set("x-trpc-source", "rsc");
  return createTRPCContext({ headers: heads });
});

const createCaller = createCallerFactory(appRouter);

export const api = cache(async () => createCaller(await createContext()));
