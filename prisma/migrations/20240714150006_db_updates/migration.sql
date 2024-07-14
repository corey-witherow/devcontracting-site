/*
  Warnings:

  - Added the required column `isActive` to the `Developers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillId` to the `Developers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Developers" ADD COLUMN     "isActive" BOOLEAN NOT NULL,
ADD COLUMN     "skillId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "isActive" BOOLEAN NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Request" ADD COLUMN     "isActive" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "Skills" (
    "id" TEXT NOT NULL,
    "Skill" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DevelopersToSkills" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DevelopersToSkills_AB_unique" ON "_DevelopersToSkills"("A", "B");

-- CreateIndex
CREATE INDEX "_DevelopersToSkills_B_index" ON "_DevelopersToSkills"("B");

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Developers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DevelopersToSkills" ADD CONSTRAINT "_DevelopersToSkills_A_fkey" FOREIGN KEY ("A") REFERENCES "Developers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DevelopersToSkills" ADD CONSTRAINT "_DevelopersToSkills_B_fkey" FOREIGN KEY ("B") REFERENCES "Skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;
