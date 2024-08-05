"use server";

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const requests = await prisma.request.findMany();

  return NextResponse.json({ data: requests });
}
