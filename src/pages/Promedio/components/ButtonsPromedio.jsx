import React from 'react';
import '../styles/ButtonsPromedio.scss';

const ButtonsPromedio = (props) => {
  return (
    <>
    <button className='button-pro'  type="button" onClick={props.Function}>{props.title}</button>
    </>
  )
}

export default ButtonsPromedio