-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "CompanyName" TEXT NOT NULL,
    "SkillsRequired" TEXT NOT NULL,
    "EstimatedStartDate" TIMESTAMP(3) NOT NULL,
    "EstimatedEndDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);
