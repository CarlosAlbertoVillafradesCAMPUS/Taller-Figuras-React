import React from 'react'

const useDescuentos = () => {
  const [stateDescuentos, setStateDescuentos] = React.useState({
    price: '',
    descuento: '',
    resultDescuento: 0,
    resultFinal: 0
  })

  const CalcDescuento = () => {
    const resultDes = (parseInt(stateDescuentos.price) * parseInt(stateDescuentos.descuento))/100
    setStateDescuentos({
        ...stateDescuentos,
        resultDescuento: resultDes,
        resultFinal: (parseInt(stateDescuentos.price) - resultDes) 
    })
  }

  return{
    stateDescuentos,
    setStateDescuentos,
    CalcDescuento
  }
}

export default useDescuentos