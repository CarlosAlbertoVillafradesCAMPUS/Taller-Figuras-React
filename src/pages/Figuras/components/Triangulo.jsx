import React from 'react';
import '../styles/Triangulo.scss';

const Triangulo = (props) => {
    const onChangeSide = (event) => {
        props.setSideTriangulo(parseInt(event.target.value));
     } 

     const onChangeBase = (event) => {
      props.setBaseTriangulo(parseInt(event.target.value));
     }

  return (
    <section className="section-triangulo">
    <h2>Calcula el Area y Perìmetro del Triàngulo</h2>
    <form className="form" action="/" >
      <label htmlFor="input_lados_t">
        Cuanto miden los lados de tu triangulo(cm):
      </label>
      <input 
      name="input_lados_t" 
      type="number"
      placeholder='En (cm)'
      onChange={onChangeSide}
      value={props.sideTriangulo} />
      <label htmlFor="input_base_t">
        Cuanto mide la Base de tu triangulo(cm):
      </label>
      <input 
      name="input_base_t" 
      type="number"
      placeholder='En (cm)'
      onChange={onChangeBase}
      value={props.baseTriangulo} />
    </form>
    <div className="cont-respuesta">
      {props.areaTriangulo > 0 && <p>El area del triangulo es: {props.areaTriangulo}</p>}
      {props.perimetroTriangulo > 0 && <p>El perimetro del triangulo es: {props.perimetroTriangulo}</p>}
      <p name="respuesta_triangulo" className="respuesta"></p>
    </div>
    {props.children}
  </section>
  )
}

export default Triangulo