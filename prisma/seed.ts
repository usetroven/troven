import { config } from "dotenv";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma/client";

config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const db = new PrismaClient({ adapter });

async function main() {
    await db.user.deleteMany();
    const user = await db.user.create({
        data: {
          id: "00000000-0000-0000-0000-000000000001",
          email: "ada@troven.test",
          fullName: "Ada Okafor"
        },
      });

    console.log("\n✅ Seed complete!");
    console.log(`   User   : ${user.id}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());