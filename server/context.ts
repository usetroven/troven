import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { db } from "@/lib/db";

export async function createTRPCContext(_opts: FetchCreateContextFnOptions) {
  return {
    db,
    userId: null as string | null,
  };
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
