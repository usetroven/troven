import { createClient } from "@/lib/supabase/server";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// This route reads cookies and request.url at runtime — never statically render it.
export const dynamic = "force-dynamic";

/**
 * Supabase Auth callback handler.
 *
 * Supabase redirects here after:
 *  - Email confirmation (sign-up)
 *  - Magic link login
 *  - OAuth (Google, GitHub, etc.)
 *
 * Exchanges the one-time `code` for a session, then upserts the Workspace
 * so every new Supabase user automatically gets a DB record.
 */
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/dashboard";

  if (code) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.user) {
      // Upsert — safe to call on every login, not just first time
      await db.workspace.upsert({
        where: { supabaseUserId: data.user.id },
        update: {
          // Keep email in sync in case user updates it in Supabase
          email: data.user.email!,
        },
        create: {
          supabaseUserId: data.user.id,
          email: data.user.email!,
          fullName:
            data.user.user_metadata?.full_name ??
            data.user.email!.split("@")[0],
          avatarUrl: data.user.user_metadata?.avatar_url ?? null,
        },
      });

      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Something went wrong — send back to sign-in with an error hint
  return NextResponse.redirect(`${origin}/sign-in?error=auth_failed`);
}
