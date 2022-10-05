import React from 'react';
import '../styles/Cuadrado.scss';

const Cuadrado = (props) => {

     const onChange = (event) => {
        props.setSideCuadrado(event.target.value);
     } 
  return (
    <section className="section-cuadrado">
            <h2>Calcula el Area y Perìmetro del Cuadrado</h2>
            <form className="form" action="/" >
              <label htmlFor="input_cuadrado">
                Cuanto miden los lados de tu cuadrado(cm):
              </label>
              <input 
              name="input_cuadrado" 
              type="number"
              placeholder='En (cm)'
              onChange={onChange}
              value={props.sideCuadrado} />
            </form>
            <div className="cont-respuesta">
              {props.areaCuadrado > 0 && <p>El area del cuadrado es: {props.areaCuadrado}cm</p>}
              {props.perimetroCuadrado > 0 && <p>El perimetro del cuadrado es: {props.perimetroCuadrado}cm</p>}
              <p name="respuesta_cuadrado" className="respuesta"></p>
            </div>
            {props.children}
          </section>
  )
}

export default Cuadrado