import React, {useState} from 'react';
import '../../assets/css/navbar.css';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/images/hf.svg' 
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="hf__navbar">
      <div className="hf__navbar-links">
        <div className="hf__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="hf__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#whf">Quienes Somos?</a></p>
          <p><a href="#possibility">Contactanos</a></p>
          <p><a href="#features">Otra Cosa</a></p>
          <p><a href="#blog">Entidades</a></p>
        </div>
      </div>
      <div className="hf__navbar-sign">
        <p>Registro</p>
        <button type="button">Ingresar</button>
      </div>
      <div className="hf__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="hf__navbar-menu_container scale-up-center">
          <div className="hf__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#whf">Quienes Somos?</a></p>
            <p><a href="#possibility">Contactanos</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Entidades</a></p>
          </div>
          <div className="hf__navbar-menu_container-links-sign">
            <p>Registro</p>
            <button type="button">Ingresar</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;