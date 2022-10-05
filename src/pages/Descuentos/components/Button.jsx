import React from 'react';
import '../styles/Button.scss';

const Button = (props) => {
  return (
    <button 
    className='button-des'
     type="button" 
     onClick={props.CalcDescuento}>
    Calcular
  </button>
  )
}

export default Button