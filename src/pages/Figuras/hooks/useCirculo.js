import React from 'react';

const useCirculo = () => {
  const [stateCirculo, setStateCirculo] = React.useState({
    radioCirculo: '',
    areaCirculo: 0,
    perimetroCirculo:0
  })

  const FunctionAreaCirculo = () => {
    setStateCirculo({
        ...stateCirculo,
        areaCirculo: (Math.PI * (stateCirculo.radioCirculo * stateCirculo.radioCirculo)).toFixed(2),
        perimetroCirculo: 0
    })
  }
  const FunctionPerimetroCirculo = () => {
    setStateCirculo({
        ...stateCirculo,
        areaCirculo: 0,
        perimetroCirculo: ((stateCirculo.radioCirculo * 2) * Math.PI).toFixed(2)
    })
  }

  return{
    stateCirculo,
    setStateCirculo,
    FunctionAreaCirculo,
    FunctionPerimetroCirculo
  }
}

export default useCirculo;