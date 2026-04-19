import type { Workspace, Storefront, Member } from "@/app/generated/prisma/client";
import type { Prisma } from "@/app/generated/prisma/client";
import type { IBaseRepository } from "./base.interface";

export type WorkspaceWithStorefronts = Workspace & { storefronts: Storefront[] };
export type WorkspaceWithMembers = Workspace & { members: Member[] };

export interface IWorkspaceRepository
  extends IBaseRepository<
    Workspace,
    Prisma.WorkspaceCreateInput,
    Prisma.WorkspaceUpdateInput,
    Prisma.WorkspaceWhereInput,
    Prisma.WorkspaceOrderByWithRelationInput
  > {
  findByOwnerId(ownerId: string): Promise<Workspace[]>;

  findWithStorefronts(id: string): Promise<WorkspaceWithStorefronts | null>;

  findWithMembers(id: string): Promise<WorkspaceWithMembers | null>;

  storefrontCount(workspaceId: string): Promise<number>;
}
