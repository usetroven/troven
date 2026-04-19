import type { Member, Role } from "@/app/generated/prisma/client";
import type { Prisma } from "@/app/generated/prisma/client";
import type { IBaseRepository } from "./base.interface";

export interface IMemberRepository
  extends IBaseRepository<
    Member,
    Prisma.MemberCreateInput,
    Prisma.MemberUpdateInput,
    Prisma.MemberWhereInput,
    Prisma.MemberOrderByWithRelationInput
  > {

  findByUserId(userId: string): Promise<Member[]>;

  findByWorkspaceId(workspaceId: string): Promise<Member[]>;

  findByStorefrontId(storefrontId: string): Promise<Member[]>;

  findMembership(
    userId: string,
    workspaceId: string | null,
    storefrontId: string | null,
  ): Promise<Member | null>;

  upsertMembership(
    userId: string,
    workspaceId: string | null,
    storefrontId: string | null,
    role: Role,
  ): Promise<Member>;
}
