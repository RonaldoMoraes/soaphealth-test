import 'express-async-errors';
import { Router, Request, Response, NextFunction } from 'express';
import {
  getContactsHandler,
  createContactHandler,
  updateContactHandler,
  deleteContactHandler,
} from './src/controllers/contactsController';
import { errorHandler } from './src/errors/errorHandler';
import { validateCreateContact, validateUpdateContact } from './src/validators/contactsValidator';

const router = Router();

/**
 * API Endpoints
 */
router.get('/api/contacts', getContactsHandler);
router.post('/api/contacts', validateCreateContact, createContactHandler);
router.put('/api/contacts/:id', validateUpdateContact, updateContactHandler);
router.delete('/api/contacts/:id', deleteContactHandler);
/**
 * END API Endpoints
 */

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res);
});

export default router;
