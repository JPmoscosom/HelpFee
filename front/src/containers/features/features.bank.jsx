import React from 'react'
import '../../assets/css/featuresBank.scss';
import {Card} from '../../components/index';
import icon from '../../assets/images/icon.png';
import super1 from '../../assets/images/bancol1.png';
import release2 from '../../assets/images/bancol2.png';

function BankFeatures() {
  return (
      
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Todo un abanico de opciones!</h2>
          <p className="description">
          Financia lo que sueñas, quieres y necesitas.
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Compra Cartera"
            title="unifica tus deudas"
            price={"100k"}
            tag={12983}
            time={1}
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Tarjeta Credito"
            title="Aprobacion Rapida"
            price={'$$$$'}
            tag="1094"
            time={2}
          />
        </div>
      </div>
    </div>
  )
}

export default BankFeatures