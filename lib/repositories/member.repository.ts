import type { Member, Role } from "@/app/generated/prisma/client";
import type { Prisma } from "@/app/generated/prisma/client";
import type { PrismaClient } from "@/app/generated/prisma/client";
import { BaseRepository } from "./base.repository";
import type { IMemberRepository } from "./interfaces/member.interface";

export class MemberRepository
  extends BaseRepository
  implements IMemberRepository
{
  constructor(db: PrismaClient) {
    super(db);
  }

  findById(id: string): Promise<Member | null> {
    return this.db.member.findUnique({ where: { id } });
  }

  findFirst(where: Prisma.MemberWhereInput): Promise<Member | null> {
    return this.db.member.findFirst({ where });
  }

  findMany(args?: {
    where?: Prisma.MemberWhereInput;
    orderBy?:
      | Prisma.MemberOrderByWithRelationInput
      | Prisma.MemberOrderByWithRelationInput[];
    skip?: number;
    take?: number;
  }): Promise<Member[]> {
    return this.db.member.findMany(args);
  }

  findByUserId(userId: string): Promise<Member[]> {
    return this.db.member.findMany({ where: { userId } });
  }

  findByWorkspaceId(workspaceId: string): Promise<Member[]> {
    return this.db.member.findMany({ where: { workspaceId } });
  }

  findByStorefrontId(storefrontId: string): Promise<Member[]> {
    return this.db.member.findMany({ where: { storefrontId } });
  }

  findMembership(
    userId: string,
    workspaceId: string | null,
    storefrontId: string | null,
  ): Promise<Member | null> {
    return this.db.member.findUnique({
      where: {
        userId_workspaceId_storefrontId: {
          userId,
          workspaceId: workspaceId ?? "",
          storefrontId: storefrontId ?? "",
        },
      },
    });
  }

  upsertMembership(
    userId: string,
    workspaceId: string | null,
    storefrontId: string | null,
    role: Role,
  ): Promise<Member> {
    return this.db.member.upsert({
      where: {
        userId_workspaceId_storefrontId: {
          userId,
          workspaceId: workspaceId ?? "",
          storefrontId: storefrontId ?? "",
        },
      },
      create: { userId, workspaceId, storefrontId, role },
      update: { role },
    });
  }

  create(data: Prisma.MemberCreateInput): Promise<Member> {
    return this.db.member.create({ data });
  }

  update(id: string, data: Prisma.MemberUpdateInput): Promise<Member> {
    return this.db.member.update({ where: { id }, data });
  }

  delete(id: string): Promise<Member> {
    return this.db.member.delete({ where: { id } });
  }

  count(where?: Prisma.MemberWhereInput): Promise<number> {
    return this.db.member.count({ where });
  }
}
