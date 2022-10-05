import React from 'react';
import '../styles/ButtonArea.scss';

const ButtonArea = (props) =>{

  const ValueButtonArea = props.ValueAreaCuadrado || props.ValueAreaTriangulo || props.ValueAreaCirculo
    return (
        <button 
        className='button-area'  
        type="button"
        onClick={ValueButtonArea}>
          Calcular Area
        </button>
    );
}

export default ButtonArea;