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
class ContactsService {
    constructor(prisma = null) {
        this.prisma = prisma !== null ? prisma : new client_1.PrismaClient;
    }
    getContacts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.contact.findMany();
        });
    }
    createContact(firstName, lastName, phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.contact.create({
                data: {
                    firstName,
                    lastName,
                    phoneNumber,
                },
            });
        });
    }
    updateContact(id, firstName, lastName, phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.contact.update({
                where: {
                    id,
                },
                data: {
                    firstName,
                    lastName,
                    phoneNumber,
                },
            });
        });
    }
    deleteContact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.contact.delete({
                where: {
                    id,
                },
            });
        });
    }
}
exports.default = ContactsService;
//# sourceMappingURL=contactsService.js.map