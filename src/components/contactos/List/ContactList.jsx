
import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {ContactService} from "../../../services/ContactService"


let ContactList = () => {

  let[state , setState] = useState({
    loading : false,
    contacts : [],
    errorMessage : ''

  });

  let GetUserData = async () =>{
    try{
      setState({...state, loading: true});
      let response = await ContactService.getAllContacts();
      setState({
        ...state,
      })
    }
    catch(error){
      
    }
  };
  useEffect(() => {
    GetUserData();
  }, []);
 
 
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
                      <input type="text" name="" id="" className="form-control" placeholder="Escribe el nombre" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input type="submit" name="" id="" className="btn btn.outline-dark" value="Buscar" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="lista-contactos">
      <div className="container">
        <div className="row">
          
          <div className="col-md-6">
            <div className="card">
              <div className="card-body bg-dark text-white">
                <div className="row align-items-center d-flex justify-content-around">
                  <div className="col-md-3">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="img-fluid img-contact" alt="" srcSet="" />
                  </div>
                  <div className="col-md-7">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-action">
                        Nombre: <span className="fw-bold">Cristian Ñustes</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Teléfono: <span className="fw-bold">3154153343</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Fecha de Nacimiento: <span className="fw-bold">21/12/1990</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Edad: <span className="fw-bold">31</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Direccion: <span className="fw-bold">Cl 25sur</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Correo: <span className="fw-bold">Cristian@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-2  d-flex flex-column align-item-center">
                    <Link to={'/contactos/Ver/:contactoId'} className="btn btn-warning my-1" ><i className="fa fa-eye"/></Link>
                    <Link to={'/contactos/Editar/:contactoId'} className="btn btn-primary my-1"><i className="fa fa-pen"/></Link>
                    <Link to={'/contactos/Ver/:contactoId'} className="btn btn-danger my-1"><i className="fa fa-trash"/></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    
    </React.Fragment>
  )
}

export default ContactList