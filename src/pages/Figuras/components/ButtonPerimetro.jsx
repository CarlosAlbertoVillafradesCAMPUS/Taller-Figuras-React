import React from 'react';
import '../styles/ButtonPerimetro.scss';

const ButtonPerimetro = (props) => {
  const ValueButtonPerimetro = props.ValuePerimetroCuadrado || props.ValuePerimetroTriangulo || props.ValuePerimetroCirculo
  return (
    <button 
        className='button-perimetro'  
        type="button"
        onClick={ValueButtonPerimetro}>
            Calcular Perimetro
    </button>
  )
}

export default ButtonPerimetro