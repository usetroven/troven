-- CreateEnum
CREATE TYPE "KycLevel" AS ENUM ('levelZero', 'levelOne', 'levelTwo', 'levelThree', 'levelFour');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('OWNER', 'ADMIN', 'MANAGER', 'STAFF');

-- CreateEnum
CREATE TYPE "StoreType" AS ENUM ('TICKETING', 'COMMERCE', 'MEETING', 'MULTIPLE', 'CUSTOM');

-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('TICKET', 'PRODUCT', 'MEETING');

-- AlterTable: add updated_at with a temporary default so existing rows are backfilled,
-- then drop the default (Prisma manages this value at the application layer via @updatedAt).
ALTER TABLE "users"
ADD COLUMN "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "kyc_level" "KycLevel" NOT NULL DEFAULT 'levelZero',
ADD COLUMN "phoneNumberNumber" TEXT,
ADD COLUMN "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE "users" ALTER COLUMN "updated_at" DROP DEFAULT;

-- DropEnum
DROP TYPE "KycStage";

-- CreateTable
CREATE TABLE "PhoneNumber" (
    "number" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PhoneNumber_pkey" PRIMARY KEY ("number")
);

-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'STAFF',
    "userId" TEXT NOT NULL,
    "workspaceId" TEXT,
    "storefrontId" TEXT,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workspace" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "Workspace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "storefrontId" TEXT NOT NULL,
    "type" "ProductType" NOT NULL,
    "title" TEXT NOT NULL,
    "ticketDate" TIMESTAMP(3),
    "duration" INTEGER,
    "stock" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Storefront" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "storeType" "StoreType" NOT NULL,
    "config" JSONB NOT NULL,

    CONSTRAINT "Storefront_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_userId_workspaceId_storefrontId_key" ON "Member"("userId", "workspaceId", "storefrontId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_phoneNumberNumber_fkey" FOREIGN KEY ("phoneNumberNumber") REFERENCES "PhoneNumber"("number") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workspace" ADD CONSTRAINT "Workspace_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Storefront" ADD CONSTRAINT "Storefront_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
