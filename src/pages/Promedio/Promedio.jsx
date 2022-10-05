import React from 'react';
import Footer from '../Homes/components/Footer';
import FormPromedio from './components/FormPromedio';
import './styles/Promedio.scss';

const Promedio = () => {

  return (
    <div className="cont">
    <div className="cont-promedio">
      <div className="cont-title-promedio">
      <h1>Taller#3 Calcular Promedio</h1>
      <p className="descripcion">En este taller vamos a crear una lista de numeros y calcularemos su promedio</p>
  </div>
      <div className="cont-section-promedio">
        <FormPromedio />
</div>
<Footer />
</div>    
</div> 
  )
}

export default Promedio