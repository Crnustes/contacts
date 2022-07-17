
import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {ContactService} from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner.js";



let ContactList = () => {

  let [query, setQuery]= useState({
    text : ''
  });

  let[state , setState] = useState({
    loading : false,
    contacts : [],
    filteredContacts: [], 
    errorMessage : ''

  });

  let GetUserData = async () =>{
    try{
      setState({...state, loading: true});
      let response = await ContactService.getAllContacts();
      setState({
        ...state,
        loading: false,
        contacts: response.data,
        filteredContacts : response.data

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

  //Borrar contactos

  let clickDelete = async (contactId) => {
    try{
      let response = await ContactService.deleteContact(contactId);
      if(response){
        setState({...state, loading: true});
        let response = await ContactService.getAllContacts();
        setState({
          ...state,
          loading: false,
          contacts: response.data,
          filteredContacts : response.data
  
        });

      }

    }
    catch(error){
      setState({
        ...state,
        loading: false,
        errorMessage: error.message
      });
    }
  } 
  // Buscador de contactos
    let searchContacts =(event) =>{
    setQuery({...query, text: event.target.value});
    let theContacts = state.contacts.filter(contact =>{
      return contact.email.toLowerCase().includes(event.target.value.toLowerCase())
    });
    setState({
      ...state,
      filteredContacts: theContacts
    })
  };

 
  let {loading, contacts , filteredContacts, errorMessage} = state;

  return (
    <React.Fragment>
   

    <section>
      <div className="contact-search p-5" >
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3">
                  Administrador de contactos
                  <Link to={'/contactos/Agregar'} className="btn btn-primary m-3">
                    Nuevo Contacto
                  </Link>
                </p>
                <blockquote className="blockquote">
                  <p>Un buen desarrollador de software trabaja con disciplina y constancia desde el primer día.</p> 
                  <footer className="blockquote-footer">Omar Bradley</footer> 
                </blockquote>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row" >
                  <div className="col">
                    <div className="mb-2">
                      <input name="text"
                      value = {query.text}
                      onChange = {searchContacts} 
                      className="form-control" placeholder="Escribe el nombre" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input type="submit" className="btn btn.outline-dark" value="Buscar" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {
      loading ? <Spinner/> :
    
    <React.Fragment>  
      <section className="lista-contactos">
        <div className="container">
          <div className="row">
             {
              filteredContacts.length > 0 &&
              filteredContacts.map( contact => {
                  return (
                      
                    <div className="col-md-6" key={contact.id}>
                      <div className="card">
                        <div className="card-body bg-dark text-white">
                          <div className="row align-items-center d-flex justify-content-around">
                            <div className="col-md-3">
                              <img src={contact.photo} className="img-fluid img-contact" alt="" srcSet="" />
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
                                  
                                </li>
                                <li className="list-group-item list-group-item-action">
                                  Direccion: <span className="fw-bold">{contact.address}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                  Correo: <span className="fw-bold">{contact.email}</span>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-2  d-flex flex-column align-item-center">
                              <Link to={`/contactos/Ver/${contact.id}`} className="btn btn-warning my-1" ><i className="fa fa-eye"/></Link>
                              <Link to={`/contactos/Editar/${contact.id}`} className="btn btn-primary my-1"><i className="fa fa-pen"/></Link>
                              <button className="btn btn-danger my-1" onClick={() => clickDelete(contact.id)} ><i className="fa fa-trash"/></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>  

                  )
                })
             }
            
          </div>
        </div>

      </section>
    </React.Fragment>
  }
    </React.Fragment>
  
  )
}

export default ContactList