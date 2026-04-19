import type { Product, ProductType } from "@/app/generated/prisma/client";
import type { Prisma } from "@/app/generated/prisma/client";
import type { PrismaClient } from "@/app/generated/prisma/client";
import { BaseRepository } from "./base.repository";
import type { IProductRepository } from "./interfaces/product.interface";

export class ProductRepository
  extends BaseRepository
  implements IProductRepository
{
  constructor(db: PrismaClient) {
    super(db);
  }

  findById(id: string): Promise<Product | null> {
    return this.db.product.findUnique({ where: { id } });
  }

  findFirst(where: Prisma.ProductWhereInput): Promise<Product | null> {
    return this.db.product.findFirst({ where });
  }

  findMany(args?: {
    where?: Prisma.ProductWhereInput;
    orderBy?:
      | Prisma.ProductOrderByWithRelationInput
      | Prisma.ProductOrderByWithRelationInput[];
    skip?: number;
    take?: number;
  }): Promise<Product[]> {
    return this.db.product.findMany(args);
  }

  findByStorefrontId(storefrontId: string): Promise<Product[]> {
    return this.db.product.findMany({ where: { storefrontId } });
  }

  findByType(storefrontId: string, type: ProductType): Promise<Product[]> {
    return this.db.product.findMany({ where: { storefrontId, type } });
  }

  create(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.db.product.create({ data });
  }

  update(id: string, data: Prisma.ProductUpdateInput): Promise<Product> {
    return this.db.product.update({ where: { id }, data });
  }

  delete(id: string): Promise<Product> {
    return this.db.product.delete({ where: { id } });
  }

  count(where?: Prisma.ProductWhereInput): Promise<number> {
    return this.db.product.count({ where });
  }
}
