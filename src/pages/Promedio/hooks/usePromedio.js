import React from 'react'

const usePromedio = () => {
  const [statePromedio, setStatePromedio] = React.useState({
    list: [],
    cadena:'',
    number: '',
    promedio: 0
  })

  const AgregarNumber = () => {
    if(statePromedio.number === ''){
        alert('No hay numeros de agregar')
    } else {
        let newList = [...statePromedio.list]
        newList.push(`${statePromedio.number} `);
        newList.sort(function(a, b){return a - b});

        
        setStatePromedio({
            ...statePromedio,
            list: newList,
            number: '',
            promedio: 0
        })
    }
  }
  const BorrarNumber = () => {
    if(statePromedio.list.length > 0) {
        let newList = [...statePromedio.list]
        newList.pop()

        setStatePromedio({
            ...statePromedio,
            list: newList,
            promedio: 0
        })
    } else {
        alert('No hay numeros que borrar')
    }
  }
  const BorrarTodo = () => {
    setStatePromedio({
        ...statePromedio,
        list: [],
        promedio: 0
    })
  }
  const CalcularPromedio = () => {
    let valorPromedio = 0;
    for (let i = 0; i < statePromedio.list.length; i++){
        valorPromedio = valorPromedio + parseInt(statePromedio.list[i])
    }
    setStatePromedio({
        ...statePromedio,
        promedio: (valorPromedio / statePromedio.list.length).toFixed(2)
    })
  }

  return{
    statePromedio,
    setStatePromedio,
    AgregarNumber,
    BorrarNumber,
    BorrarTodo,
    CalcularPromedio
  }
}

export default usePromedio