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
class ContactsRepository {
    constructor(repository = null) {
        this.repository = repository !== null ? repository : new client_1.PrismaClient();
        this.query = this.repository.contact;
    }
    findByPhone(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.query.findUnique({
                where: { phoneNumber: phoneNumber },
            });
        });
    }
    getContacts(lastName = '') {
        return __awaiter(this, void 0, void 0, function* () {
            const where = lastName ? {
                where: { lastName: { contains: lastName } },
            } : {};
            return yield this.query.findMany(where);
        });
    }
    createContact(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.query.create({ data });
        });
    }
    updateContact(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.query.update({
                where: { id },
                data
            });
        });
    }
    deleteContact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.query.delete({
                where: { id }
            });
        });
    }
}
exports.default = ContactsRepository;
//# sourceMappingURL=contactsRepository.js.map