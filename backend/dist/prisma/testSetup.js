"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    // Create the "Contact" table if it doesn't exist
    yield prisma.$queryRaw `CREATE TABLE IF NOT EXISTS "Contact" (
      id INTEGER PRIMARY KEY,
      firstName TEXT,
      lastName TEXT,
      phoneNumber TEXT UNIQUE
    );
  `;
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    // Drop the "Contact" table
    yield prisma.$queryRaw `DROP TABLE IF EXISTS "Contact";`;
    yield prisma.$disconnect();
}));
//# sourceMappingURL=testSetup.js.map