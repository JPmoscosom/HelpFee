import React from 'react';
import Feature from '../../components/feature/feature';
import '../../assets/css/what.css';

const What = () => {
  return (
    <div className="hf__whathf section__margin" id="whf">
    <div className="hf__whathf-feature">
      <Feature title="Help Fee" text="Pretendemos el mejoramiento de la calidad de vida de las personas con deudas, a través del acceso a mejores condiciones de sus créditos, mediante una solución tecnológica que permite solicitar y dar a conocer, las diferentes opciones de tasas y alivios ofrecidas por diferentes entidades para una disminución en el pago de obligaciones financieras y/o la adquisición de productos con el mejor beneficio." />
    </div>
    <div className="hf__whathf-heading">
      <h1 className="gradient__text">Un Portafolio Gigante De Posibilidades</h1>
      <p>Explora las entidades</p>
    </div>
    <div className="hf__whathf-container">
      <Feature title="Chatbot" text="Puedes resolver las dudas que tengas rapidamente!, solo tienes que interactuar con nuestro chat automatizado!" />
      <Feature title="Portafolio" text="las diferentes opciones de tasas y alivios ofrecidas por diferentes entidades para una disminución en el pago de obligaciones financieras y/o la adquisición de productos con el mejor beneficio." />
      <Feature title="Asesores" text="Nuestro equipo de asesores te atendera lo antes posible cuando decidas adquirir un producto o cuando tengas dudas sobre alguno!" />
    </div>
  </div>
  )
}

export default What