import { Contact, PrismaClient } from '@prisma/client';
import { ContactsRepositoryInterface } from '../contactsRepositoryInterface';

class ContactsRepository implements ContactsRepositoryInterface {
  private repository;
  private query;

  constructor(repository = null) {
    this.repository = repository !== null ? repository : new PrismaClient();
    this.query = this.repository.contact;
  }

  async findByPhone(phoneNumber: string): Promise<any> {
    return await this.query.findUnique({
      where: { phoneNumber: phoneNumber },
    });
  }

  async getContacts(lastName: string = ''): Promise<Contact[]> {
    const where: object = lastName ? {
      where: { lastName: { contains: lastName } },
    } : {};
    return await this.query.findMany(where);
  }

  async createContact(data: any): Promise<Contact> {
    return await this.query.create({ data });
  }

  async updateContact(id: number, data: object): Promise<Contact> {
    return await this.query.update({
      where: { id },
      data
    });
  }

  async deleteContact(id: number): Promise<void> {
    await this.query.delete({
      where: { id }
    });
  }
}

export default ContactsRepository;
