import type { User, Member } from "@/app/generated/prisma/client";
import type { Prisma } from "@/app/generated/prisma/client";
import type { IBaseRepository } from "./base.interface";

export type UserWithMemberships = User & { memberships: Member[] };

export interface IUserRepository
  extends IBaseRepository<
    User,
    Prisma.UserCreateInput,
    Prisma.UserUpdateInput,
    Prisma.UserWhereInput,
    Prisma.UserOrderByWithRelationInput
  > {

  findByEmail(email: string): Promise<User | null>;

  findWithMemberships(id: string): Promise<UserWithMemberships | null>;
}
