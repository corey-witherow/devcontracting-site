/*
  Warnings:

  - You are about to drop the column `CompanyName` on the `Projects` table. All the data in the column will be lost.
  - You are about to drop the column `EstimatedEndDate` on the `Projects` table. All the data in the column will be lost.
  - You are about to drop the column `EstimatedStartDate` on the `Projects` table. All the data in the column will be lost.
  - You are about to drop the column `SkillsRequired` on the `Projects` table. All the data in the column will be lost.
  - Added the required column `companyName` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estimatedEndDate` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estimatedStartDate` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillsRequired` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Projects" DROP COLUMN "CompanyName",
DROP COLUMN "EstimatedEndDate",
DROP COLUMN "EstimatedStartDate",
DROP COLUMN "SkillsRequired",
ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "estimatedEndDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "estimatedStartDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "skillsRequired" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Request" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Developers" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Developers_pkey" PRIMARY KEY ("id")
);
