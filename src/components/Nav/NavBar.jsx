import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
       <nav className="navbar sticky-top navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to={'/'} className="navbar-brand"> AGENDA DE CONTACTOS </Link>
          </div>
        </nav>
    </React.Fragment>
  )
}

export default NavBar