import React from 'react';
import '../../assets/css/bank.scss';
import logo from '../../assets/images/LogoBancolombia.png';

const Bank = () => {
  return (
    <div className='bank_home'>
      <div className='container'>
        <div className='content'>
        <p className="sub-title">Es el momento de todos</p>
          <h1 className="title">Bancolombia</h1>
          <p className="description">
          Una organización que ofrece servicios que facilitan su vida, y no un banco que impone dificultades para relacionarse con la gente.
          </p>
          <button>Ver Productos</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={logo} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Bank