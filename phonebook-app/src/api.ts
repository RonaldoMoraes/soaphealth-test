const baseUrl = 'http://localhost:3001/api';

// Create a contact
export const createContact = async (contactData: Omit<Contact, 'id'>): Promise<Contact> => {    
    try {
        const response = await fetch(`${baseUrl}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
        });
        
        if (!response.ok) {
            throw new Error('Failed to create contact');
        }
        
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Get all contacts
export const getContacts = async (): Promise<Contact[]> => {
    try {
        const response = await fetch(`${baseUrl}/contacts`);
        if (!response.ok) {
            throw new Error('Failed to get contacts');
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Update a contact by id
export const updateContact = async (contactId: number, contactData: Omit<Contact, 'id'>): Promise<Contact> => {
    try {
        const response = await fetch(`${baseUrl}/contacts/${contactId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
        });
        
        if (!response.ok) {
            throw new Error('Failed to update contact');
        }
        
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Delete a contact by id
export const deleteContact = async (contactId: number): Promise<void> => {
    try {
        const response = await fetch(`${baseUrl}/contacts/${contactId}`, {
            method: 'DELETE',
        });
        
        if (!response.ok) {
            throw new Error('Failed to delete contact');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}
