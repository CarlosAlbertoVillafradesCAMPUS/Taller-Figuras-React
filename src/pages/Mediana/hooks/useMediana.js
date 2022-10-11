import React from "react";

const useMediana = () => {
  const [stateMediana, setStateMediana] = React.useState({
    list: [],
    cadena: "",
    number: "",
    mediana: 0,
  });

  //CREAR LA LISTA

  //CREAR LA LISTA: Agregar numero

  const AgregarNumeroMediana = (newNumber) => {
    if (stateMediana.number === "") {
      alert("No hay ningun numero para agregar a la lista");
    } else {
      let newList = [...stateMediana.list];
      newList.push(`${newNumber} `);
      newList.sort(function(a, b){return a - b});

      setStateMediana({
        ...stateMediana,
        list: newList,
        number: '',
        mediana: 0,
      });
      console.log(stateMediana.list)
    }
  };

  //CREAR LA LISTA: Borrar Numero

  const BorrarNumeroMediana = () => {
    if (stateMediana.list.length === 0) {
        alert('No hya ningun numero que borrar en la lista')
    } else{
        let newList = [...stateMediana.list];
        newList.pop();
    
        setStateMediana({
            ...stateMediana,
            list: newList,
            mediana: 0
        })
    }
  }

  //CREAR LA LISTA: Borrar Toda la lista

  const BorrarTodoMediana = () => {
    setStateMediana({
        ...stateMediana,
        list: [],
        mediana: 0
    })
  }

  //CALCULAR LA MEDIANA

  const CalcularMediana = () => {
    const mitadList = Math.floor(stateMediana.list.length / 2);

    if ((stateMediana.list.length % 2) === 0 ){
        let functionMediana = (parseInt(stateMediana.list[mitadList]) + parseInt(stateMediana.list[(mitadList - 1)])) / 2;
        setStateMediana({
            ...stateMediana,
            mediana: functionMediana
        })
    } else {
        let functionMediana = (stateMediana.list[mitadList]);
        setStateMediana({
            ...stateMediana,
            mediana: functionMediana
        })
    }
  }

  return {
    stateMediana,
    setStateMediana,
    AgregarNumeroMediana,
    BorrarNumeroMediana,
    BorrarTodoMediana,
    CalcularMediana
  };
};

export default useMediana;
