import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { updateUserSchema } from "@/lib/validations";

export const userRouter = createTRPCRouter({
  /**
   * Returns the currently signed-in user's Workspace record.
   * workspaceId is derived from the Supabase auth userId — never from client input.
   */
  me: protectedProcedure.query(async ({ ctx }) => {
    const workspace = await ctx.db.workspace.findUnique({
      where: { supabaseUserId: ctx.userId },
    });

    if (!workspace) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Workspace not found. Try signing out and back in.",
      });
    }

    return workspace;
  }),

  /** Fetch any workspace's public profile by their DB id. */
  byId: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const workspace = await ctx.db.workspace.findUnique({
        where: { id: input.id },
        select: {
          id: true,
          fullName: true,
          avatarUrl: true,
          createdAt: true,
        },
      });

      if (!workspace) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Workspace not found.",
        });
      }

      return workspace;
    }),

  /** Update the current user's profile. */
  update: protectedProcedure
    .input(updateUserSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.workspace.update({
        where: { supabaseUserId: ctx.userId },
        data: input,
      });
    }),
});
