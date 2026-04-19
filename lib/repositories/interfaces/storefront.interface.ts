import type { Storefront, Product, Member } from "@/app/generated/prisma/client";
import type { Prisma } from "@/app/generated/prisma/client";
import type { IBaseRepository } from "./base.interface";

export type StorefrontWithProducts = Storefront & { products: Product[] };
export type StorefrontWithMembers = Storefront & { members: Member[] };

export interface IStorefrontRepository
  extends IBaseRepository<
    Storefront,
    Prisma.StorefrontCreateInput,
    Prisma.StorefrontUpdateInput,
    Prisma.StorefrontWhereInput,
    Prisma.StorefrontOrderByWithRelationInput
  > {

  findByWorkspaceId(workspaceId: string): Promise<Storefront[]>;

  findWithProducts(id: string): Promise<StorefrontWithProducts | null>;

  findWithMembers(id: string): Promise<StorefrontWithMembers | null>;
}
