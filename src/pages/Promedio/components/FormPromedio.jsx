import React from 'react';
import ButtonsPromedio from '../../../components/Buttons';
import usePromedio from '../hooks/usePromedio';
import '../styles/FormPromedio.scss';

const FormPromedio = () => {
    const {
        statePromedio,
        setStatePromedio,
        AgregarNumber,
        BorrarNumber,
        BorrarTodo,
        CalcularPromedio
      } = usePromedio();

      const onChangeNumber = (event) => {
        setStatePromedio({
            ...statePromedio,
            number: event.target.value
        })
      }
console.log(statePromedio.list)
  return (
    <section>
    <h2>Crea tu lista y calcula el promedio</h2>
      <form className="form" action="/">
         <input
          name= "input_lista"
           type="number"
           placeholder='Numero'
           onChange={onChangeNumber}
           value={statePromedio.number} /> 
         <div className="cont-buttons">
         <ButtonsPromedio title='Agregar Numero' Function={() => AgregarNumber()} />
          <ButtonsPromedio title='Borrar Numero' Function={() => BorrarNumber()} />
          <ButtonsPromedio title='Borrar Todo' Function={() => BorrarTodo()} />
        </div>
         <p className="respuesta_lista" >Tu lista es: {statePromedio.list}</p>
         <ButtonsPromedio title='Calcular Promedio' Function={() => CalcularPromedio()} />
     </form>
     <div className="respuesta-promedio">
      <p className="R">Respuesta :</p>
      {statePromedio.promedio > 0 && <p 
      className="respuesta_promedio">
        El promedio de tu lista es: {statePromedio.promedio}
        </p>}
     </div>
  </section> 
  )
}

export default FormPromedio