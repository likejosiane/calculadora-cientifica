import '../styles/Boton.css'; 
import React from 'react';

function Boton(props){
  const esOperador = valor =>{
    return isNaN(valor);
  };

  return(
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}
      onClick={() => props.click(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;

