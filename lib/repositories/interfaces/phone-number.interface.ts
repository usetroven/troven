import type { PhoneNumber } from "@/app/generated/prisma/client";
import type { Prisma } from "@/app/generated/prisma/client";

export interface IPhoneNumberRepository {
  findByNumber(number: string): Promise<PhoneNumber | null>;

  create(data: Prisma.PhoneNumberCreateInput): Promise<PhoneNumber>;

  update(
    number: string,
    data: Prisma.PhoneNumberUpdateInput,
  ): Promise<PhoneNumber>;

  delete(number: string): Promise<PhoneNumber>;

  markAsVerified(number: string): Promise<PhoneNumber>;
}
