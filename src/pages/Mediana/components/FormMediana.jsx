import React from 'react';
import ButtonsPromedio from '../../../components/Buttons';
import useMediana from '../hooks/useMediana';
import '../styles/FormMediana.scss';

const FormMediana = () => {
    const {
        stateMediana,
        setStateMediana,
        AgregarNumeroMediana,
        BorrarNumeroMediana,
    BorrarTodoMediana,
    CalcularMediana
    } = useMediana();

    const onChangeMediana = (event) => {
        setStateMediana({
            ...stateMediana,
            number: event.target.value
        })
    }

  return (
    <section>
    <h2>Crea tu lista y calcula la Mediana</h2>
      <form className="form-Mediana" action="/">
         <input
          name= "input_lista"
           type="number"
           placeholder='Numero'
           onChange={onChangeMediana}
           value={stateMediana.number}/> 
         <div className="cont-buttons">
            <ButtonsPromedio title='Agregar Numero' Function={() => AgregarNumeroMediana(stateMediana.number)} />
            <ButtonsPromedio title='Borrar Numero' Function={() => BorrarNumeroMediana()}  />
            <ButtonsPromedio title='Borrar Todo' Function={() => BorrarTodoMediana()} />
        </div>
         <p className="respuesta_lista" >Tu lista organizada es: {stateMediana.list} </p>
         <ButtonsPromedio title='Calcular Mediana' Function={() => CalcularMediana()} />
     </form>
     <div className="respuesta-Mediana">
      <p className="R">Respuesta :</p>

      {(stateMediana.mediana != 0) && 
      <p className='respuesta_Mediana'>La mediana de tu lista es: {stateMediana.mediana}</p>}
     </div>
  </section> 
  )
}

export default FormMediana;