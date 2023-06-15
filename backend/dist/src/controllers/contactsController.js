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
exports.deleteContactHandler = exports.updateContactHandler = exports.createContactHandler = exports.getContactsHandler = void 0;
const contactsService_1 = __importDefault(require("../services/contactsService"));
const contactsService = new contactsService_1.default();
const getContactsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const lastName = (_a = req.query) === null || _a === void 0 ? void 0 : _a.lastName;
    const contacts = yield contactsService.getContacts(lastName || '');
    res.json(contacts);
});
exports.getContactsHandler = getContactsHandler;
const createContactHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, phoneNumber } = req.body;
    const newContact = yield contactsService.createContact(firstName, lastName, phoneNumber);
    res.json(newContact);
});
exports.createContactHandler = createContactHandler;
const updateContactHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { firstName, lastName, phoneNumber } = req.body;
    const updatedContact = yield contactsService.updateContact(Number(id), firstName, lastName, phoneNumber);
    res.json(updatedContact);
});
exports.updateContactHandler = updateContactHandler;
const deleteContactHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield contactsService.deleteContact(Number(id));
    res.json({ message: 'Contact deleted successfully' });
});
exports.deleteContactHandler = deleteContactHandler;
//# sourceMappingURL=contactsController.js.map