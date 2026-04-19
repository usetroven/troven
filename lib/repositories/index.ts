import { db } from "@/lib/db";

import { IProductRepository } from "./interfaces/product.interface";
import { IStorefrontRepository } from "./interfaces/storefront.interface";
import { IUserRepository } from "./interfaces/user.interface";
import { IWorkspaceRepository } from "./interfaces/workspace.interface";
import { MemberRepository } from "./member.repository";
import { PhoneNumberRepository } from "./phone-number.repository";
import { ProductRepository } from "./product.repository";
import { StorefrontRepository } from "./storefront.repository";
import { UserRepository } from "./user.repository";
import { WorkspaceRepository } from "./workspace.repository";

export const userRepo : IUserRepository= new UserRepository(db);
export const workspaceRepo : IWorkspaceRepository = new WorkspaceRepository(db);
export const storefrontRepo : IStorefrontRepository = new StorefrontRepository(db);
export const productRepo : IProductRepository = new ProductRepository(db);
export const memberRepo = new MemberRepository(db);
export const phoneNumberRepo = new PhoneNumberRepository(db);

export type { IUserRepository } from "./interfaces/user.interface";
export type { IWorkspaceRepository } from "./interfaces/workspace.interface";
export type { IStorefrontRepository } from "./interfaces/storefront.interface";
export type { IProductRepository } from "./interfaces/product.interface";
export type { IMemberRepository } from "./interfaces/member.interface";
export type { IPhoneNumberRepository } from "./interfaces/phone-number.interface";

export type { UserWithMemberships } from "./interfaces/user.interface";
export type {
  WorkspaceWithStorefronts,
  WorkspaceWithMembers,
} from "./interfaces/workspace.interface";
export type {
  StorefrontWithProducts,
  StorefrontWithMembers,
} from "./interfaces/storefront.interface";
