import type { PrismaClient } from "@/app/generated/prisma/client";

export abstract class BaseRepository {
  constructor(protected readonly db: PrismaClient) {}
}
