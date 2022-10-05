import React from 'react';
import '../styles/Circulo.scss';

const Circulo = (props) => {

  const onChange = (event) => {
    props.setStateCirculo({
      ...props.stateCirculo,
      radioCirculo: parseInt(event.target.value)
    })
  }

  return (
    <section className="section-circulo">
            <h2>Calcula el Area y el Perìmetro del Cìrculo</h2>
            <form className="form" action="/" >
              <label htmlFor="input_radio">
                Cuanto mide el radio de tu circulo(cm):
              </label>
              <input 
              name="input_radio" 
              type="number"
              placeholder='En (cm)'
              onChange={onChange}
              value={props.stateCirculo.radioCirculo} />
            </form>
            <div className="cont-respuesta">
              {props.stateCirculo.areaCirculo > 0 && <p>El area del circulo es: {props.stateCirculo.areaCirculo}cm</p>}
              {props.stateCirculo.perimetroCirculo > 0 && <p>El perimetro del circulo es: {props.stateCirculo.perimetroCirculo}cm</p>}
              <p name="respuesta_circulo" className="respuesta"></p>
            </div>
            {props.children}
          </section>
  )
}

export default Circulo