import { Request, Response } from 'express';
import ContactsService from '../services/contactsService';
const contactsService = new ContactsService();

export const getContactsHandler = async (req: Request, res: Response) => {
  const lastName = req.query?.lastName as string;
  
  const contacts = await contactsService.getContacts(lastName || '');
  res.json(contacts);
};

export const createContactHandler = async (req: Request, res: Response) => {  
  const { firstName, lastName, phoneNumber } = req.body;
  const newContact = await contactsService.createContact(firstName, lastName, phoneNumber);
  res.json(newContact);
};

export const updateContactHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { firstName, lastName, phoneNumber } = req.body;
  const updatedContact = await contactsService.updateContact(
    Number(id),
    firstName,
    lastName,
    phoneNumber
  );
  res.json(updatedContact);
};

export const deleteContactHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  await contactsService.deleteContact(Number(id));
  res.json({ message: 'Contact deleted successfully' });
};