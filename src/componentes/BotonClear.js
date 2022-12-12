import React from "react";
import '../styles/BotonClear.css';

const BotonClear = (props) => (
  <div 
    className='clear' 
    onClick={props.clickClear}>
    {props.children}
  </div>
  );

export default BotonClear;