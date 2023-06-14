import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

beforeAll(async () => {
  // Create the "Contact" table if it doesn't exist
  await prisma.$queryRaw`CREATE TABLE IF NOT EXISTS "Contact" (
      id INTEGER PRIMARY KEY,
      firstName TEXT,
      lastName TEXT,
      phoneNumber TEXT UNIQUE
    );
  `;
});

afterAll(async () => {
  // Drop the "Contact" table
  await prisma.$queryRaw`DROP TABLE IF EXISTS "Contact";`;

  await prisma.$disconnect();
});