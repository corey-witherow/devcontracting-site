/*
  Warnings:

  - You are about to drop the column `isActive` on the `Developers` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Projects` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Request` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Developers" DROP COLUMN "isActive";

-- AlterTable
ALTER TABLE "Projects" DROP COLUMN "isActive";

-- AlterTable
ALTER TABLE "Request" DROP COLUMN "isActive";
