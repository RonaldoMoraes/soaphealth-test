import 'express-async-errors';
import { Router, Request, Response, NextFunction } from 'express';
import {
  getContactsHandler,
  createContactHandler,
  updateContactHandler,
  deleteContactHandler,
} from './src/controllers/contactsController';
import errorHandler from './src/errors/errorHandler';
import { validateCreateContact, validateUpdateContact } from './src/validators/contactsValidator';

const router = Router();

/**
 * API Endpoints
 */
router.get('/contacts', getContactsHandler);
router.post('/contacts', validateCreateContact, createContactHandler);
router.put('/contacts/:id', validateUpdateContact, updateContactHandler);
router.delete('/contacts/:id', deleteContactHandler);
/**
 * END API Endpoints
 */

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res);
});

export default router;
