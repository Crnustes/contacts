import React, {useEffect, useState} from 'react';
import { Link , useParams } from "react-router-dom";
import {ContactService} from "../../../services/ContactService";

let EditContact = () => {


  let {contactId} = useParams();

  let[state , setState] = useState({
    loading : false,
    contacts : {
      name: '',
      photo: '',
      mobile: '',
      email: '',
      birthday:'',
      address: ''

    },
    errorMessage : ''

  });
  useEffect ( async () => {
    try{
      setState({...state, loading:true});
      let response = await ContactService.getContact(contactId);
      setState({
        ...state,
        loading: false,
        contact: response.data
      });
    }
      catch (error) {
        setState({
          ...state,
        loading:false,
        errorMesssage: error

        });
      }
    }, [contactId]);

  /*let GetUserData = async () =>{
    try{
      setState({...state, loading: true});
      let response = await ContactService.getContacts(contactId);
      setState({
        ...state,
        loading: false,
        contacts: response.data

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
  }, [contactId]);*/

 

  let {loading, contacts , errorMessage} = state;


  return (
    <React.Fragment>
      <pre> {JSON.stringify(contacts)} </pre>
      <section className="add-contact p-4" >
        <div className="container">
          <div className="row">
            <div className="col text-center bg-light p-4">
              <p className="h3 text-center fw-bold "> Editar Contacto</p>
              <p>Ingresa los datos correspondientes</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className=" col-md-5 p-5">
              <form action="">
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Nombre Completo"/>
                </div>
                <div className="mb-2">
                  <input type="phone" className="form-control" placeholder="Telefono"/>
                </div>
                <div className="mb-2">
                  <input type="date" className="form-control" placeholder="Fecha de Nacimiento"/>
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Direccion"/>
                </div>
                <div className="mb-2">
                  <input type="mail" className="form-control" placeholder="Correo Electrónico"/>
                </div>
                <div className="mb-2">
                <input type="text" className="form-control" placeholder="Url de la Imagen"/>
                </div>
                <div className="mb-2 p-3">
                <input type="submit" className="btn btn-success"  value="Actualizar " />
                <Link to={'/contactos/list'} className="btn btn-dark ms-3"> Cerrar </Link>
                </div>
              </form>
            </div>
            <div className="col-md-5">
              <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="img-fluid img-contact" alt=""  />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default EditContact