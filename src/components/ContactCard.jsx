import React from "react";
import { useNavigate } from 'react-router-dom';

const ContactCard = ({contact, deleteContact}) => {
    const navigate = useNavigate();

    const imgStyles = {
        with: '200px',
        height:'200px',
        borderRadius: '50%', 
        objectFit: 'cover'
    }
  return (
        <div className="d-flex justify-content-center align-items-center">   
            <div className="card mb-3 bg-secondary" style={{"width": "1200px"}}>
                <div className="row g-0 ">
                    <div className="col-md-4 styleDivImg d-flex justify-content-center align-items-center">
                    <img src={'src/assets/img/rigo-baby.jpg'} className="img-fluid" style={imgStyles} alt="sin conexion"/>
                    </div>
                    <div className="col-md-6">
                            <h3 className="card-title">{contact.name}</h3>
                            <h5 className="card-title"><i class="bi bi-geo-alt-fill me-2"></i>{contact.address}</h5>
                            <h5 className="card-title">  <i class="bi bi-telephone-fill me-2"></i>{contact.phone}</h5>
                            <h5 className="card-title"><i class="bi bi-envelope-fill me-2"></i>{contact.email}</h5> 
                    </div>
                    <div className='col-md-2 d-flex justify-content-center align-items-center flex-column"'>
                        <button style={{ width: '40px', height: '40px' }} className="d-flex justify-content-center align-items-center btn btn-danger m-2" onClick={() => deleteContact(contact.id)}><i className="bi bi-trash"></i></button>
                        <button style={{ width: '40px', height: '40px' }} className="d-flex justify-content-center align-items-center btn btn-danger m-2" onClick={() => navigate(`/edit/${contact.id}`)}><i className="bi bi-pencil"></i></button>
                    </div>    
                </div>
            </div>
        </div>
  
  )
}

export default ContactCard;