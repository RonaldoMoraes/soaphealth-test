import { Contact } from '@prisma/client';
import { ContactsServiceInterface } from './contactsServiceInterface';
import ContactsRepository from '../repositories/prisma/contactsRepository';
import { ContactsRepositoryInterface } from '../repositories/contactsRepositoryInterface';

class ContactsService implements ContactsServiceInterface {
  private repository;

  constructor(repository: ContactsRepositoryInterface | null = null) {
    this.repository = repository !== null ? repository : new ContactsRepository();
  }

  async findByPhone(phoneNumber: string): Promise<Contact[]> {
    return await this.repository.findByPhone(phoneNumber);
  }

  async getContacts(): Promise<Contact[]> {
    return await this.repository.getContacts();
  }

  async createContact(firstName: string, lastName: string, phoneNumber: string): Promise<Contact> {
    return await this.repository.createContact({ firstName, lastName, phoneNumber });
  }

  async updateContact(id: number, firstName: string, lastName: string, phoneNumber: string): Promise<Contact> {
    return await this.repository.updateContact(id, { firstName, lastName, phoneNumber });
  }

  async deleteContact(id: number): Promise<void> {
    await this.repository.deleteContact(id);
  }
}

export default ContactsService;
