import React from 'react';
import Footer from '../../components/Footer';
import FormMediana from './components/FormMediana';
import './styles/Mediana.scss'

const Mediana = () => {
  return (
    <div className="fondo-mediana">
    <div className="cont-Mediana">
      <div className="cont-title-Mediana">
      <h1>Taller#4 Calcular Mediana</h1>
      <p className="descripcion-Mediana">En este taller vamos a crear una lista de numeros y hallaremos la mediana</p>
  </div>
      <div className="cont-section-Mediana">
        <FormMediana />
</div>
<Footer />
</div>    
</div> 
  )
}

export default Mediana;