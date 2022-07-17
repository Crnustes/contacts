import React, {useEffect, useState} from 'react';
import { Link , useNavigate} from "react-router-dom";
import {ContactService} from "../../../services/ContactService";


const AddContact = () => {

  let navigate = useNavigate();

  let[state , setState] = useState({
    loading : false,
    contact : {
      
      name: "",
      photo: "",
      mobile: "",
      email: "",
      birthday: "",
      address: ""
    },
    errorMessage : ''

  });

  let updateInput = (event) => {

    setState({
      ...state,
      contact:{
        ...state.contact,
        [event.target.name] : event.target.value
      }
    })
  };

   let submitForm = async (event) => {

    event.preventDefault();

    try{
      let response = await ContactService.createContact(state.contact);
      if(response){
        navigate('/contactos/list', {remplace: true});
      }
    }
    catch (error){
      setState({...state , errorMessage: error.message});
      navigate('/contactos/add', {remplace: false});

    }

  };

  let {loading, contact , errorMessage} = state;

  return (
    <React.Fragment>
      <section className="add-contact p-4" >
        <div className="container">
          <div className="row">
            <div className="col text-center bg-light p-4">
              <p className="h3 text-center fw-bold "> Crear Contacto</p>
              <p>Ingresa los datos correspondientes</p>
            </div>
          </div>
          <div className="row">
            <div className="align-items-center p-5">
              <form onSubmit = {submitForm}>
                <div className="mb-2">
                  <input
                  required = {true}
                  name="name"
                  value ={contact.name}
                  onChange ={updateInput}
                  type="text" className="form-control" placeholder="Nombre Completo"/>
                </div>
                <div className="mb-2">
                  <input 
                  required = {true}
                  name="mobile"
                  value ={contact.mobile}
                  onChange ={updateInput}
                  type="tel" className="form-control" placeholder="Telefono" />
                </div>
                <div className="mb-2">
                  <input 
                  required = {true}
                  name="birthday"
                  value ={contact.birthday}
                  onChange ={updateInput}
                  type="date" className="form-control" placeholder="Fecha de Nacimiento"/>
                </div>
                <div className="mb-2">
                  <input 
                  required = {true}
                  name="address"
                  value ={contact.address}
                  onChange ={updateInput}
                  type="text" className="form-control" placeholder="Direccion"/>
                </div>
                <div className="mb-2">
                 
                  <input 
                  required = {true}
                   name="email"
                   value ={contact.email}
                   onChange ={updateInput}                  
                  type="mail" className="form-control" placeholder="Correo Electrónico"/>
                </div>
                <div className="mb-2">
                <input 
                required = {true}
                 name="photo"
                 value ={contact.photo}
                 onChange ={updateInput}
                type="text" className="form-control" placeholder="Url de la Imagen"/>
                </div>
                <div className="mb-2 p-3">
                <input type="submit" className="btn btn-success"  value="Crear nuevo contacto " />
                <Link to={'/contactos/list'} className="btn btn-dark ms-3"> Cerrar </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AddContact