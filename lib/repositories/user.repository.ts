import type { User } from "@/app/generated/prisma/client";
import type { Prisma } from "@/app/generated/prisma/client";
import type { PrismaClient } from "@/app/generated/prisma/client";
import { BaseRepository } from "./base.repository";
import type { IUserRepository, UserWithMemberships } from "./interfaces/user.interface";

export class UserRepository extends BaseRepository implements IUserRepository {
  constructor(db: PrismaClient) {
    super(db);
  }

  findById(id: string): Promise<User | null> {
    return this.db.user.findUnique({ where: { id } });
  }

  findFirst(where: Prisma.UserWhereInput): Promise<User | null> {
    return this.db.user.findFirst({ where });
  }

  findMany(args?: {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    skip?: number;
    take?: number;
  }): Promise<User[]> {
    return this.db.user.findMany(args);
  }

  findByEmail(email: string): Promise<User | null> {
    return this.db.user.findUnique({ where: { email } });
  }

  findWithMemberships(id: string): Promise<UserWithMemberships | null> {
    return this.db.user.findUnique({
      where: { id },
      include: { memberships: true },
    });
  }

  create(data: Prisma.UserCreateInput): Promise<User> {
    return this.db.user.create({ data });
  }

  update(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    return this.db.user.update({ where: { id }, data });
  }

  delete(id: string): Promise<User> {
    return this.db.user.delete({ where: { id } });
  }

  count(where?: Prisma.UserWhereInput): Promise<number> {
    return this.db.user.count({ where });
  }
}
