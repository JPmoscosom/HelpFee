
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Footer, Blog, Possibility, Features, What, Header, BankHome} from './containers/index.js';
import { CTA, Brand, NavBar} from './components/index.js';
import Entidades from './components/Entidades/Entidades.js';
import Login from './containers/login/login.jsx'

import './App.css';
import Home from './containers/home.js';



const  App = () =>{
  return(
    
    <BrowserRouter>
      
      <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/entidades' element={<Entidades />} exact />
      <Route path='/login' element={<Login />} exact />
      <Route path='/bank' element={<BankHome />} exact />
      </Routes>
    </BrowserRouter>
   
  );
  
};

export default App;
