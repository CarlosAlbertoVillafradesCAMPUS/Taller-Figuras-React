import React from 'react';
import '../styles/FormDescuentos.scss';

const FormDescuentos = (props) => {

    const onChangePrice = (event) => {
        props.setStateDescuentos({
            ...props.stateDescuentos,
            price: event.target.value,
            resultFinal: 0
        })
    }
    const onChangeDescuento = (event) => {
        props.setStateDescuentos({
            ...props.stateDescuentos,
            descuento: event.target.value,
            resultFinal: 0
        })
    }
  return (
    <section className="section-des">
    <h2>Coloca el precio y el descuento que le quieres aplicar</h2>
    <form className="form" action="/">
      <label htmlFor="input_precio"> Precio del Producto</label>
      <input 
      type="number" 
      name="input_precio"
      placeholder='Precio'
      onChange={onChangePrice}
      value={props.stateDescuentos.price} />
      <label htmlFor="input_descuento"> Descuento</label>
      <input 
      type="number"
       name="input_descuento"
       placeholder='Descuento'
       onChange={onChangeDescuento}
       value={props.stateDescuentos.descuento} />
    </form>
    <div className="resultado-descuentos">
      <p className="R">Respuesta :</p>
      <div>
        {props.stateDescuentos.resultFinal > 0 && 
        <p 
        name="respuesta" 
        className="respuesta">
            Precio de producto: ${props.stateDescuentos.price} <br />
             Sele aplica un descuento del {props.stateDescuentos.descuento}%: ${props.stateDescuentos.resultDescuento}<br />
             PRECIO A PAGAR: ${props.stateDescuentos.resultFinal}
             </p>}
      </div>
    </div>
    {props.children}
  </section>
  )
}

export default FormDescuentos