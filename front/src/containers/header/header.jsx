import React from 'react';
import people from '../../assets/images/people.png';
import ai from '../../assets/images/logo.png';
import '../../assets/css/header.css';

const Header = () => (
  <div className="hf__header section__padding" id="home">
    <div className="hf__header-content">
      <h1 className="gradient__text">Todos los productos bancarios en un solo lugar!</h1>
      <p>Ahora puedes consultar, obtener y comparar los productos ofrecidos por las diferentes entidades financieras que pertenencen a Asobancaria en un solo lugar!</p>

      <div className="hf__header-content__input">
        <input type="email" placeholder="Tu direccion de email" />
        <button type="button">Inscribete!</button>
      </div>

      <div className="hf__header-content__people">
        <img src={people} />
        <p>1,600 personas ya son parte de la revolucion bancaria!</p>
      </div>
    </div>

    <div className="hf__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;