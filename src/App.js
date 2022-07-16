import React from 'react';
import './App.css';
import {Routes , Route , Navigate , Switch} from "react-router-dom";

import NavBar from "./components/Nav/NavBar";
import ContactList from "./components/contactos/List/ContactList";
import AddContact from "./components/contactos/Agregar/AddContact";
import ViewContact from "./components/contactos/Ver/ViewContact";
import EditContact from "./components/contactos/Editar/EditContact";
import Spinner from "./components/Spinner/Spinner";

let App = () => {
  return (
    <React.Fragment>
       
      <NavBar/>
       
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contactos/list'} />} />
        <Route path={'/contactos/list'} element={<ContactList/>} />
        <Route path={'/contactos/Agregar'} element={<AddContact/>} />
        <Route path={'/contactos/Ver/:contactoId'} element={<ViewContact/>} />
        <Route path={'/contactos/Editar/:contactId'} element={<EditContact/>} />
      
      </Routes>
      

</React.Fragment>
  );
}

export default App;
