import React from 'react';
import '../../assets/css/brand.css';
import asoban from '../../assets/images/asobanca.png'

const Brand= () => {
  return(
  <div className="hf__brand section__padding">
    <div>
      <img src={asoban} />
    </div>
  </div>
  );
}

export default Brand