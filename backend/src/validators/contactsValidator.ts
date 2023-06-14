import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import ContactsRepository from '../repositories/prisma/contactsRepository';

const repository = new ContactsRepository();

const createContactSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  phoneNumber: Joi.string().required(),
});

function validateCreateContact(req: Request, res: Response, next: NextFunction) {
  const { error } = createContactSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  handlePhoneNumber(req, res, next);
}

const updateContactSchema = Joi.object({
  id: Joi.number().required(),
});

function validateUpdateContact(req: Request, res: Response, next: NextFunction) { 
  const { error } = updateContactSchema.validate(req.params);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  if (req.body.phoneNumber) {
    handlePhoneNumber(req, res, next);
  };
}

function handlePhoneNumber(req: Request, res: Response, next: NextFunction) {
  repository.findByPhone(req.body.phoneNumber).then((existingContact) => {
    if (existingContact && req.params?.id !== existingContact.id.toString()) {
      return res.status(400).json({ error: 'Contact already exists' });
    }

    next();
  });
}

export { validateCreateContact, validateUpdateContact };