"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateContact = exports.validateCreateContact = void 0;
const joi_1 = __importDefault(require("joi"));
const contactsRepository_1 = __importDefault(require("../repositories/prisma/contactsRepository"));
const repository = new contactsRepository_1.default();
const createContactSchema = joi_1.default.object({
    firstName: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
    phoneNumber: joi_1.default.string().required(),
});
function validateCreateContact(req, res, next) {
    const { error } = createContactSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    handlePhoneNumber(req, res, next);
}
exports.validateCreateContact = validateCreateContact;
const updateContactSchema = joi_1.default.object({
    id: joi_1.default.number().required(),
});
function validateUpdateContact(req, res, next) {
    const { error } = updateContactSchema.validate(req.params);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    if (req.body.phoneNumber) {
        handlePhoneNumber(req, res, next);
    }
    ;
}
exports.validateUpdateContact = validateUpdateContact;
function handlePhoneNumber(req, res, next) {
    repository.findByPhone(req.body.phoneNumber).then((existingContact) => {
        var _a;
        if (existingContact && ((_a = req.params) === null || _a === void 0 ? void 0 : _a.id) !== existingContact.id.toString()) {
            return res.status(400).json({ error: 'Contact already exists' });
        }
        next();
    });
}
//# sourceMappingURL=contactsValidator.js.map