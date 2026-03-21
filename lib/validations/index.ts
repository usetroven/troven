import { z } from "zod";

// ---- Common ----
export const paginationSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().min(1).max(100).default(20),
});

export const slugSchema = z
  .string()
  .min(3)
  .max(60)
  .regex(/^[a-z0-9-]+$/, "Only lowercase letters, numbers and hyphens allowed");

// ---- User ----
export const updateUserSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  bio: z.string().max(500).optional(),
});

// ---- Store / Storefront ----
export const createStoreSchema = z.object({
  name: z.string().min(1).max(100),
  slug: slugSchema,
  description: z.string().max(500).optional(),
});

export const updateStoreSchema = createStoreSchema.partial();

// ---- Product ----
export const createProductSchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().max(2000).optional(),
  price: z.number().int().min(0), // stored in kobo/cents
  storeId: z.string().cuid(),
  published: z.boolean().default(false),
});

export const updateProductSchema = createProductSchema.partial();

export type PaginationInput = z.infer<typeof paginationSchema>;
export type CreateStoreInput = z.infer<typeof createStoreSchema>;
export type UpdateStoreInput = z.infer<typeof updateStoreSchema>;
export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
