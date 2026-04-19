import type { Workspace } from "@/app/generated/prisma/client";
import type { Prisma } from "@/app/generated/prisma/client";
import type { PrismaClient } from "@/app/generated/prisma/client";
import { BaseRepository } from "./base.repository";
import type {
  IWorkspaceRepository,
  WorkspaceWithStorefronts,
  WorkspaceWithMembers,
} from "./interfaces/workspace.interface";

export class WorkspaceRepository
  extends BaseRepository
  implements IWorkspaceRepository
{
  constructor(db: PrismaClient) {
    super(db);
  }

  findById(id: string): Promise<Workspace | null> {
    return this.db.workspace.findUnique({ where: { id } });
  }

  findFirst(where: Prisma.WorkspaceWhereInput): Promise<Workspace | null> {
    return this.db.workspace.findFirst({ where });
  }

  findMany(args?: {
    where?: Prisma.WorkspaceWhereInput;
    orderBy?:
      | Prisma.WorkspaceOrderByWithRelationInput
      | Prisma.WorkspaceOrderByWithRelationInput[];
    skip?: number;
    take?: number;
  }): Promise<Workspace[]> {
    return this.db.workspace.findMany(args);
  }

  findByOwnerId(ownerId: string): Promise<Workspace[]> {
    return this.db.workspace.findMany({ where: { ownerId } });
  }

  findWithStorefronts(id: string): Promise<WorkspaceWithStorefronts | null> {
    return this.db.workspace.findUnique({
      where: { id },
      include: { storefronts: true },
    });
  }

  findWithMembers(id: string): Promise<WorkspaceWithMembers | null> {
    return this.db.workspace.findUnique({
      where: { id },
      include: { members: true },
    });
  }

  async storefrontCount(workspaceId: string): Promise<number> {
    return this.db.storefront.count({ where: { workspaceId } });
  }

  create(data: Prisma.WorkspaceCreateInput): Promise<Workspace> {
    return this.db.workspace.create({ data });
  }

  update(id: string, data: Prisma.WorkspaceUpdateInput): Promise<Workspace> {
    return this.db.workspace.update({ where: { id }, data });
  }

  delete(id: string): Promise<Workspace> {
    return this.db.workspace.delete({ where: { id } });
  }

  count(where?: Prisma.WorkspaceWhereInput): Promise<number> {
    return this.db.workspace.count({ where });
  }
}
