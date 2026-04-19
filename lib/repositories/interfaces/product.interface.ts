import type { Product, ProductType } from "@/app/generated/prisma/client";
import type { Prisma } from "@/app/generated/prisma/client";
import type { IBaseRepository } from "./base.interface";

export interface IProductRepository
  extends IBaseRepository<
    Product,
    Prisma.ProductCreateInput,
    Prisma.ProductUpdateInput,
    Prisma.ProductWhereInput,
    Prisma.ProductOrderByWithRelationInput
  > {

  findByStorefrontId(storefrontId: string): Promise<Product[]>;

  findByType(storefrontId: string, type: ProductType): Promise<Product[]>;
}
