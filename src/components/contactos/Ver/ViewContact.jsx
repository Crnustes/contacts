import React, {useEffect, useState} from 'react';
import { Link , useParams } from "react-router-dom";
import {ContactService} from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner.js";

let ViewContact = () => {
   
  let {contactId} = useParams();

  let[state , setState] = useState({
    loading : false,
    contact : [],
    errorMessage : ''

  });

  let GetUserData = async () =>{
    try{
      //setState({...state, loading: true});
      let response = await ContactService.getContact(contactId);
      setState({
        ...state,
        loading: false,
        contact: response.data

      });
    }
    catch(error){
      setState({
        ...state,
        loading: false,
        errorMessage: error.message
      });
      
    }
  };
  useEffect(() => {
    GetUserData();
  }, []);
 
  let {loading, contact , errorMessage} = state;

  return (

    
    <React.Fragment>
      <section className="view-contact-title p-5">
        <div className="container">
          <div className="row">
            <div className="col">
            <p className="h3 text-center fw-bold "> Datos del Contacto</p>
              <p>Estos son los datos del contacto</p>
            </div>
          </div>
        </div>
      </section>
      {
        loading ? <Spinner/> :
        <React.Fragment>
          {
            Object.keys(contact).length > 0 &&
            <section className="view-contact mt-4">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <img src={contact.photo} className="img-fluid img-contact-view" alt=""  />
                </div>
                <div className="col-md-7">
                  <ul className="list-group">
                    <li className="list-group-item list-group-item-action">
                      Nombre: <span className="fw-bold">{contact.name}</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Teléfono: <span className="fw-bold">{contact.mobile}</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Fecha de Nacimiento: <span className="fw-bold">{contact.birthday}</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Edad: <span className="fw-bold">31</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Direccion: <span className="fw-bold">{contact.address}</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Correo: <span className="fw-bold">{contact.email}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Link to={'/contactos/List'} className="btn btn-dark"> Volver  </Link>
                </div>
                
              </div>
            </div>
          </section>
          }
        </React.Fragment>
      }
      
    </React.Fragment>
  )
}

export default ViewContact