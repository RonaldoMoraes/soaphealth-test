"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactsController_1 = require("./src/controllers/contactsController");
const router = (0, express_1.Router)();
router.get('/contacts', contactsController_1.getContactsHandler);
router.post('/contacts', contactsController_1.createContactHandler);
router.put('/contacts/:id', contactsController_1.updateContactHandler);
router.delete('/contacts/:id', contactsController_1.deleteContactHandler);
exports.default = router;
//# sourceMappingURL=routes.js.map