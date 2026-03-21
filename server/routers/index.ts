import { createTRPCRouter } from "../trpc";
import { userRouter } from "./user";

/**
 * Root tRPC router.
 * Add new sub-routers here as the app grows.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
