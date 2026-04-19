import type { PhoneNumber } from "@/app/generated/prisma/client";
import type { Prisma } from "@/app/generated/prisma/client";
import type { PrismaClient } from "@/app/generated/prisma/client";
import { BaseRepository } from "./base.repository";
import type { IPhoneNumberRepository } from "./interfaces/phone-number.interface";

export class PhoneNumberRepository
  extends BaseRepository
  implements IPhoneNumberRepository
{
  constructor(db: PrismaClient) {
    super(db);
  }

  findByNumber(number: string): Promise<PhoneNumber | null> {
    return this.db.phoneNumber.findUnique({ where: { number } });
  }

  create(data: Prisma.PhoneNumberCreateInput): Promise<PhoneNumber> {
    return this.db.phoneNumber.create({ data });
  }

  update(
    number: string,
    data: Prisma.PhoneNumberUpdateInput,
  ): Promise<PhoneNumber> {
    return this.db.phoneNumber.update({ where: { number }, data });
  }

  delete(number: string): Promise<PhoneNumber> {
    return this.db.phoneNumber.delete({ where: { number } });
  }

  markAsVerified(number: string): Promise<PhoneNumber> {
    return this.db.phoneNumber.update({
      where: { number },
      data: { isVerified: true },
    });
  }
}
