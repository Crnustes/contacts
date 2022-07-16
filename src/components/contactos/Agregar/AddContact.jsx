import React from 'react';
import { Link } from "react-router-dom";

const AddContact = () => {
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
              <form>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Nombre Completo"/>
                </div>
                <div className="mb-2">
                  <input type="phone" className="form-control" placeholder="Telefono" />
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