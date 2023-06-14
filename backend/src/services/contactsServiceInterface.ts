import { Contact } from "@prisma/client";

export interface ContactsServiceInterface {
    findByPhone(phoneNumber: string): Promise<Contact[]>;
    getContacts(): Promise<Contact[]>;
    createContact(firstName: string, lastName: string, phoneNumber: string): Promise<Contact>;
    updateContact(id: number, firstName: string, lastName: string, phoneNumber: string): Promise<Contact>;
    deleteContact(id: number): Promise<void>;
}