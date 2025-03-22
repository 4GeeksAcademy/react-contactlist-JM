import React, { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import { useNavigate } from 'react-router-dom';
import ContactCard from "./ContactCard";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactList = () =>{

    const {contacts, deleteContact,updateContact} = useContext(ContactContext);
    const navigate = useNavigate();

    return(
        <div className="container">
            <h2 className="text-center mb-4">Lista de Contactos</h2>
            <div className="d-flex justify-content-end mb-3">
                <button
                    onClick={() => navigate('/add')}
                    className="btn btn-primary" 
                >
                    Añadir Contactos
                </button>
            </div>
            <ul>
                {contacts.map(contact =>(
                    <ul style={{"list-style-type":"none"}}>
                        <li key={contact.id}>
                            <ContactCard 
                            contact ={contact}
                            deleteContact={deleteContact}
                            updateContact={updateContact}
                             />
                        </li>
                    </ul>
                 
                ))}
            </ul>
        </div>
       
    );
};

export default ContactList;