import React, { createContext, useState, useEffect } from "react";

export const ContactContext = createContext();

const ContactProvider = ({children}) =>{
    
    const [contacts, setContacts] = useState([]);
    //Importando desde la API de 4GeekAcademy
    const fetchContacts = async () =>{
        try {
            const response = await fetch('https://playground.4geeks.com/contact/agendas/mago/contacts');
            if(!response.ok){
                throw new Error ('Error al obtener los datos');
            }

            if(response.status === 404){
                await createUser()
                return
          }

            const data = await response.json(); 
            setContacts(data.contacts)
            console.log(data.contacts)
           

        }catch(error){
            console.error('Error fetching contacts:', error)
        }
       
    };
    //Crear Usuario
    const CreateUsuario = async () => {
        try {
            const response = await fetch('https://playground.4geeks.com/contact/agendas/mago/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Error al crear el usuario');
    
        } 
    }catch (error) {
        console.error('Error al crear usuario', error);
    }}


    //Crear nuevo contacto
    const addContact = async (newContact) => {
        try {
            const response = await fetch('https://playground.4geeks.com/contact/agendas/mago/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newContact),
            });
            const addedContact = await response.json();
            setContacts([...contacts, addedContact]);
        } catch (error) {
            console.error('Error adding contact:', error);
        }
    };
    //Actualizar Contactos
    const updateContact = async (id, updatedContact) => {
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/mago/contacts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedContact),
            });
            const updatedData = await response.json();
            setContacts(contacts.map(contact => (contact.id === id ? updatedData : contact)));
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    };

      // Eliminar un contacto
      const deleteContact = async (id) => {
        try {
            await fetch(`https://playground.4geeks.com/contact/agendas/mago/contacts/${id}`, {
                method: 'DELETE',
            });
            setContacts(contacts.filter(contact => contact.id !== id));
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return(
        <ContactContext.Provider value={{contacts, deleteContact, addContact, updateContact}}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactProvider;