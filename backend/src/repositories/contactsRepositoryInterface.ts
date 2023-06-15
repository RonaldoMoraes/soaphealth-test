import { Contact } from '@prisma/client';

interface ContactData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface ContactsRepositoryInterface {
  findByPhone(phoneNumber: string): Promise<Contact[]>;
  getContacts(lastName: string = ''): Promise<Contact[]>;
  createContact(data: ContactData): Promise<Contact>;
  updateContact(id: number, data: ContactData): Promise<Contact>;
  deleteContact(id: number): Promise<void>;
}