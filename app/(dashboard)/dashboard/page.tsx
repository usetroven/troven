import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Derive a display name from user metadata (set at sign-up) or email
  const displayName =
    user?.user_metadata?.full_name?.split(" ")[0] ??
    user?.email?.split("@")[0] ??
    null;

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">
        Welcome back{displayName ? `, ${displayName}` : ""}
      </h1>
      <p className="mt-2 text-muted-foreground">
        Manage your products and storefronts from here.
      </p>
    </div>
  );
}
