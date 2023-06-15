"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = require("express");
const contactsController_1 = require("./src/controllers/contactsController");
const errorHandler_1 = __importDefault(require("./src/errors/errorHandler"));
const contactsValidator_1 = require("./src/validators/contactsValidator");
const router = (0, express_1.Router)();
/**
 * API Endpoints
 */
router.get('/api/contacts', contactsController_1.getContactsHandler);
router.post('/api/contacts', contactsValidator_1.validateCreateContact, contactsController_1.createContactHandler);
router.put('/api/contacts/:id', contactsValidator_1.validateUpdateContact, contactsController_1.updateContactHandler);
router.delete('/api/contacts/:id', contactsController_1.deleteContactHandler);
/**
 * END API Endpoints
 */
router.use((err, req, res, next) => {
    (0, errorHandler_1.default)(err, req, res);
});
exports.default = router;
//# sourceMappingURL=routes.js.map