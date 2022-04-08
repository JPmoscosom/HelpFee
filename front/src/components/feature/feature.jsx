import React from 'react';
import '../../assets/css/feature.css';

const Feature = ({ title, text}) => {
  return (
    <div className="hf__features-container__feature">
    <div className="hf__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="hf__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
  )
}

export default Feature