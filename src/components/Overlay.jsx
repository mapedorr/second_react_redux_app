import React from 'react';

const Overlay = (props) => {
  return (
    <div className={`overlay ${props.src && 'open'}`}>
      <div className='overlay-inner'>
        <button className='close' onClick={() => props.close()}>&#9746;</button>
        <h3>{props.title}</h3>
        <img src={props.src} alt={props.title} title={props.title} />
      </div>
    </div>
  );
};

export default Overlay;
