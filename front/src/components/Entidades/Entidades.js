import React from 'react';
import { render } from 'react-dom';
import * as ReactDOM from 'react-dom'
import './entidades.scss'
import Navbar from '../../components/NavBar/NavBar.jsx';

function  Entidad(){
  return(
    <div className="gradient__bg" id='entidad'>
        <Navbar />
        <div className="wrapper">
      <Card img = 'https://www.agenciacma.com.br/wp-content/uploads/2021/05/Logo-Bancolombia.png' title = "BANCOLOMBIA" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit erat, iaculis nec lacus id, maximus pharetra est." />
      <Card img = 'https://caracoltv.brightspotcdn.com/dims4/default/5e44465/2147483647/strip/true/crop/800x420+0+84/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcaracol-brightspot.s3-us-west-2.amazonaws.com%2Fassets%2Fbluradio%2Feh-04-800x588.jpg' title = "SB COLPATRIA" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit erat, iaculis nec lacus id, maximus pharetra est." />
      <Card img = 'https://www.bbva.com/wp-content/uploads/2019/04/Logo-BBVA-1920x1080.jpg' title = "BBVA" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit erat, iaculis nec lacus id, maximus pharetra est." />
      <Card img = 'https://ccplazacentral.com/wp-content/uploads/2021/07/davivienda-logo.jpg' title = "DAVIVIENDA" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit erat, iaculis nec lacus id, maximus pharetra est." />
      <Card img = 'https://cosmocentro.com/wp-content/uploads/2017/01/logo-banco-av-villas-1024x1024-1.jpg' title = "AV VILLAS" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit erat, iaculis nec lacus id, maximus pharetra est." />
      <Card img = 'https://i0.wp.com/www.numeroservicioalcliente.com/wp-content/uploads/2017/01/banco-de-bogota-logo.png?fit=1476%2C984&ssl=1' title = "BANCO DE BOGOTA " description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit erat, iaculis nec lacus id, maximus pharetra est." />
      <Card img = 'https://bulevar.com.co/wp-content/uploads/2020/07/occidente.jpg' title = "B. DE OCCIDENTE" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit erat, iaculis nec lacus id, maximus pharetra est." />
      <Card img = 'https://emporiodutyfree.com/wp-content/uploads/2021/04/Banco-caja-social-Logo-SF.png' title = "B. CAJA SOCIAL" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit erat, iaculis nec lacus id, maximus pharetra est." />
      <Card img = 'https://www.bancopopular.com.co/popular/minisites/descuentos-la14/img/logo-Banco-Popular.png' title = "BANCO POPULAR" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit erat, iaculis nec lacus id, maximus pharetra est." />
      <Card img = 'https://media-exp1.licdn.com/dms/image/C4E0BAQE7bpiPk8O9BQ/company-logo_200_200/0/1625249327964?e=2159024400&v=beta&t=AVgQrm4YTNe44bv12kosydYugaD-dDU67HnTDT30HZE' title = "BANCO FINANDINA" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit erat, iaculis nec lacus id, maximus pharetra est." />
      <Card img = 'https://brandemia.org/sites/default/files/inline/images/santander_logo_copia.jpg' title = "BCO SANTANDER" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit erat, iaculis nec lacus id, maximus pharetra est." />
      <Card img = 'https://pbs.twimg.com/profile_images/1410586600103464966/KcHXTEnx_400x400.png' title = "BANCO FALABELLA" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit erat, iaculis nec lacus id, maximus pharetra est." />

      </div>
    </div>
    

    
  )
}

function Card(props){
  return(
    <div className="ecard">
      <div className="ecard_body">
        <img src={props.img} className="ecard_image" />
        <h2 className="ecard_title">{props.title}</h2>
        <p className="ecard_description">{props.description}</p>
      </div>
      <button className="ecard_btn">Mas Informacion</button>
    </div>
  )
}



export default Entidad;
