import { createClient } from "@/lib/supabase/server";
import { db } from "@/lib/db";

/**
 * Context available in every tRPC procedure.
 *
 * `userId` — the Supabase auth user UUID, or null for unauthenticated requests.
 *
 * In every protectedProcedure that reads/writes tenant data, resolve
 * workspaceId from `ctx.userId` via a db.workspace lookup — never trust
 * a workspaceId passed from the client.
 */
export async function createTRPCContext(opts: { headers: Headers }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return {
    db,
    userId: user?.id ?? null,
    headers: opts.headers,
  };
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
