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
const client_1 = require("@prisma/client");
const contactsService_1 = __importDefault(require("./contactsService"));
require("../../prisma/testSetup");
const contactService = new contactsService_1.default();
const prisma = new client_1.PrismaClient();
describe('Contacts Service', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield prisma.contact.deleteMany();
    }));
    test('getContacts should return an array of contacts', () => __awaiter(void 0, void 0, void 0, function* () {
        const expectedContacts = [
            { id: 1, firstName: 'Ronaldo', lastName: 'Moraes', phoneNumber: '35991458401' },
            { id: 2, firstName: 'Maria', lastName: 'Lee', phoneNumber: '987654321' },
        ];
        for (const contact of expectedContacts) {
            yield prisma.contact.create({ data: contact });
        }
        const contacts = yield contactService.getContacts();
        expect(contacts).toEqual(expect.arrayContaining(expectedContacts));
    }));
    test('createContact should create a new contact', () => __awaiter(void 0, void 0, void 0, function* () {
        const firstName = 'Ronaldo';
        const lastName = 'Moraes';
        const phoneNumber = '123456789';
        const createdContact = yield contactService.createContact(firstName, lastName, phoneNumber);
        expect(createdContact.firstName).toBe(firstName);
        expect(createdContact.lastName).toBe(lastName);
        expect(createdContact.phoneNumber).toBe(phoneNumber);
    }));
    test('updateContact should update an existing contact', () => __awaiter(void 0, void 0, void 0, function* () {
        const existingContact = {
            id: 1,
            firstName: 'Ronaldo',
            lastName: 'Moraes',
            phoneNumber: '123456789',
        };
        // Insert the existing contact into the database
        yield prisma.contact.create({ data: existingContact });
        // Updated contact details
        const updatedFirstName = 'Updated Ronaldo';
        const updatedLastName = 'Updated Moraes';
        const updatedPhoneNumber = '987654321';
        const updatedContact = yield contactService.updateContact(existingContact.id, updatedFirstName, updatedLastName, updatedPhoneNumber);
        expect(updatedContact.firstName).toBe(updatedFirstName);
        expect(updatedContact.lastName).toBe(updatedLastName);
        expect(updatedContact.phoneNumber).toBe(updatedPhoneNumber);
    }));
    test('deleteContact should delete an existing contact', () => __awaiter(void 0, void 0, void 0, function* () {
        const existingContact = {
            id: 1,
            firstName: 'Ronaldo',
            lastName: 'Moraes',
            phoneNumber: '123456789',
        };
        // Insert the existing contact into the database
        yield prisma.contact.create({ data: existingContact });
        yield contactService.deleteContact(existingContact.id);
        const deletedContact = yield prisma.contact.findUnique({
            where: { id: existingContact.id },
        });
        expect(deletedContact).toBeNull();
    }));
});
//# sourceMappingURL=contactsService.test.js.map