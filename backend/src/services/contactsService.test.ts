import { PrismaClient, Contact } from '@prisma/client';
import ContactsService from './contactsService';
import '../../prisma/testSetup';

const contactService = new ContactsService();
const prisma = new PrismaClient();

describe('Contacts Service', () => {
    beforeEach(async () => {
        await prisma.contact.deleteMany();
    });
    
    test('getContacts should return an array of contacts', async () => {
        const expectedContacts: Contact[] = [
            { id: 1, firstName: 'Ronaldo', lastName: 'Moraes', phoneNumber: '35991458401' },
            { id: 2, firstName: 'Maria', lastName: 'Lee', phoneNumber: '987654321' },
        ];
        
        for (const contact of expectedContacts) {
            await prisma.contact.create({ data: contact });
        }
        
        const contacts = await contactService.getContacts('');
        
        expect(contacts).toEqual(expect.arrayContaining(expectedContacts));
    });
    
    test('createContact should create a new contact', async () => {
        const firstName = 'Ronaldo';
        const lastName = 'Moraes';
        const phoneNumber = '123456789';
        
        const createdContact = await contactService.createContact(firstName, lastName, phoneNumber);
        
        expect(createdContact.firstName).toBe(firstName);
        expect(createdContact.lastName).toBe(lastName);
        expect(createdContact.phoneNumber).toBe(phoneNumber);
    });
    
    test('updateContact should update an existing contact', async () => {
        const existingContact: Contact = {
            id: 1,
            firstName: 'Ronaldo',
            lastName: 'Moraes',
            phoneNumber: '123456789',
        };
        
        // Insert the existing contact into the database
        await prisma.contact.create({ data: existingContact });
        
        // Updated contact details
        const updatedFirstName = 'Updated Ronaldo';
        const updatedLastName = 'Updated Moraes';
        const updatedPhoneNumber = '987654321';
        
        const updatedContact = await contactService.updateContact(
            existingContact.id,
            updatedFirstName,
            updatedLastName,
            updatedPhoneNumber
            );
            
            expect(updatedContact.firstName).toBe(updatedFirstName);
            expect(updatedContact.lastName).toBe(updatedLastName);
            expect(updatedContact.phoneNumber).toBe(updatedPhoneNumber);
        });
        
        test('deleteContact should delete an existing contact', async () => {

            const existingContact: Contact = {
                id: 1,
                firstName: 'Ronaldo',
                lastName: 'Moraes',
                phoneNumber: '123456789',
            };
            
            // Insert the existing contact into the database
            await prisma.contact.create({ data: existingContact });
            
            await contactService.deleteContact(existingContact.id);
            
            const deletedContact = await prisma.contact.findUnique({
                where: { id: existingContact.id },
            });
            expect(deletedContact).toBeNull();
        });
    });
    