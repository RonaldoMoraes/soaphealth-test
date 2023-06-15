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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactsRepository_1 = __importDefault(require("../repositories/prisma/contactsRepository"));
class ContactsService {
    constructor(repository = null) {
        this.repository = repository !== null ? repository : new contactsRepository_1.default();
    }
    findByPhone(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findByPhone(phoneNumber);
        });
    }
    getContacts(lastName = '') {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.getContacts(lastName);
        });
    }
    createContact(firstName, lastName, phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.createContact({ firstName, lastName, phoneNumber });
        });
    }
    updateContact(id, firstName, lastName, phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.updateContact(id, { firstName, lastName, phoneNumber });
        });
    }
    deleteContact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.deleteContact(id);
        });
    }
}
exports.default = ContactsService;
//# sourceMappingURL=contactsService.js.map