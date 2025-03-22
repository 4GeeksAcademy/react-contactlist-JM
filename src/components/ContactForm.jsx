import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ContactContext } from '../context/ContactContext';

const ContactForm = () => {
  
  const { addContact, updateContact, contacts } = useContext(ContactContext);
  const navigate = useNavigate();
  const { id } = useParams(); // Obtener el ID del contacto si estamos editando

  const [formData, setFormData] = useState({
    name: '',
    phone:'',
    email: '',
    address:''
  });

  // Cargar datos del contacto si estamos editando
  useEffect(() => {
    if (id) {
      const contactToEdit = contacts.find(contact => contact.id === parseInt(id));
      if (contactToEdit) {
        setFormData({ name: contactToEdit.name, email: contactToEdit.email });
      }
    }
  }, [id, contacts]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateContact(parseInt(id), { id: parseInt(id), ...formData });
    } else {
      addContact({ ...formData, id: Date.now() });
    }
    navigate('/'); // Volver a la lista después de guardar
  };

  return (
    <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}} >
        <form onSubmit={handleSubmit} style={{"width":"750px"}} className="bg-secondary p-3 rounded" >
          {<h2>{id ? 'Edit Contact' : 'Add Contact'}</h2> }
            <div class="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Name</label>
                  <input
                    type="name"
                    name='name'
                    placeholder='name'
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control" 
                    id="exampleInputName"
                    required
                    />   
              </div>

              <div class="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Phone</label>
                  <input
                  type="phone"
                  name='phone'
                  placeholder='phone'
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  id="exampleInputPhone"
                    />
              </div>

              <div class="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email</label>
                  <input
                    type="email"
                    name='email'
                    placeholder='email'
                    value={formData.email}
                    onChange={handleChange}
                    class="form-control" 
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    />
              </div>
              <div class="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Address</label>
                  <input
                    type="text"
                    name='address'
                    placeholder='address'
                    value={formData.address}
                    onChange={handleChange}
                    class="form-control" 
                    id="exampleInputAdress"
                    aria-describedby="addreslHelp"
                    />
              </div>
           

        <button type="submit" class="btn btn-primary">{id ? 'Update' : 'Add'}</button>
        <div className="d-flex justify-content-end mb-3">
                <button
                    onClick={() => navigate('/')}
                    className="btn btn-primary" 
                >
                    Ir a Lista de Contactos
                </button>
            </div>
        </form>
            
      </div>
  );
};

export default ContactForm;