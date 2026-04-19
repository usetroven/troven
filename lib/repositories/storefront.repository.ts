import type { Storefront } from "@/app/generated/prisma/client";
import type { Prisma } from "@/app/generated/prisma/client";
import type { PrismaClient } from "@/app/generated/prisma/client";
import { BaseRepository } from "./base.repository";
import type {
  IStorefrontRepository,
  StorefrontWithProducts,
  StorefrontWithMembers,
} from "./interfaces/storefront.interface";

export class StorefrontRepository
  extends BaseRepository
  implements IStorefrontRepository
{
  constructor(db: PrismaClient) {
    super(db);
  }

  findById(id: string): Promise<Storefront | null> {
    return this.db.storefront.findUnique({ where: { id } });
  }

  findFirst(where: Prisma.StorefrontWhereInput): Promise<Storefront | null> {
    return this.db.storefront.findFirst({ where });
  }

  findMany(args?: {
    where?: Prisma.StorefrontWhereInput;
    orderBy?:
      | Prisma.StorefrontOrderByWithRelationInput
      | Prisma.StorefrontOrderByWithRelationInput[];
    skip?: number;
    take?: number;
  }): Promise<Storefront[]> {
    return this.db.storefront.findMany(args);
  }

  findByWorkspaceId(workspaceId: string): Promise<Storefront[]> {
    return this.db.storefront.findMany({ where: { workspaceId } });
  }

  findWithProducts(id: string): Promise<StorefrontWithProducts | null> {
    return this.db.storefront.findUnique({
      where: { id },
      include: { products: true },
    });
  }

  findWithMembers(id: string): Promise<StorefrontWithMembers | null> {
    return this.db.storefront.findUnique({
      where: { id },
      include: { members: true },
    });
  }

  create(data: Prisma.StorefrontCreateInput): Promise<Storefront> {
    return this.db.storefront.create({ data });
  }

  update(id: string, data: Prisma.StorefrontUpdateInput): Promise<Storefront> {
    return this.db.storefront.update({ where: { id }, data });
  }

  delete(id: string): Promise<Storefront> {
    return this.db.storefront.delete({ where: { id } });
  }

  count(where?: Prisma.StorefrontWhereInput): Promise<number> {
    return this.db.storefront.count({ where });
  }
}
