import React from 'react';
import '../styles/Buttons.scss';

const Buttons = (props) => {
  return (
    <>
    <button className={`button-pro`}  type="button" onClick={props.Function}>{props.title}</button>
    </>
  )
}

export default Buttons;