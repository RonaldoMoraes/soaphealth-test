import React, { useEffect, useState } from 'react';
import ContactList from './components/ContactList';
import ContactModal from './components/ContactModal';
import { Contact, ContactFormValues } from './types';
import { createContact, getContacts, updateContact, deleteContact } from './api';

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const contacts = await getContacts();
      setContacts(contacts);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    }
  };

  const handleCreateContact = async (newContact: ContactFormValues) => {
    try {
      const createdContact = await createContact(newContact);
      setContacts([...contacts, createdContact]);
      closeModal();
    } catch (error) {
      console.error('Failed to create contact:', error);
    }
  };

  const handleUpdateContact = async (updatedContact: Contact | ContactFormValues) => {
    try {
      const updatedContactData: Contact = {
        ...(selectedContact as Contact),
        ...(updatedContact as ContactFormValues),
      };
  
      await updateContact(updatedContactData.id, updatedContactData);
      setContacts(prevContacts =>
        prevContacts.map(contact => (contact.id === updatedContactData.id ? updatedContactData : contact))
      );
      closeModal();
    } catch (error) {
      console.error('Failed to update contact:', error);
    }
  };

  const handleDeleteContact = async (id: number) => {
    try {
      await deleteContact(id);
      setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  const openModal = () => {
    setSelectedContact(null);
    setIsModalOpen(true);
  };

  const openEditModal = (contact: Contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const style = {
    btn: {
      // maxHeight: '40px',
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <h1 className="text-center mb-4">Phone Book App</h1>
        <div className="justify-content-center flex-row">
          <ContactList
            contacts={contacts}
            onUpdateContact={handleUpdateContact}
            onDeleteContact={handleDeleteContact}
            onOpenModal={openEditModal}
          />
          <button className="btn btn-info text-white p-2" style={style.btn} onClick={openModal}>
            <i className="bi bi-plus"></i>Add Contact
          </button>
        </div>
        {isModalOpen && (
          <ContactModal
            contact={selectedContact}
            onSubmit={selectedContact ? handleUpdateContact : handleCreateContact}
            onClose={closeModal}
            isModalOpen={isModalOpen}
          />
        )}
      </div>
    </div>
  );
};

export default App;
