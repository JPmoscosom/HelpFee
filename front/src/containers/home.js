
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Footer, Bank, Possibility, Features, What, Header } from './index.js';
import { CTA, Brand, NavBar} from '../components/index.js';
import Entidades from '../components/Entidades/Entidades.js';

import '../App.css';



const  Home = () =>{
  return(
    

    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <CTA />
      <Footer />    
    </div>
    

  );
  
};

export default Home;