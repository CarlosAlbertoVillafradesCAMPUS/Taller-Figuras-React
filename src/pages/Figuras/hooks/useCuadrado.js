import React from 'react'

const useCuadrado = () => {
    const [sideCuadrado, setSideCuadrado] = React.useState('');
    const [areaCuadrado, setAreaCuadrado] = React.useState(0);
    const [perimetroCuadrado, setPerimetroCuadrado] = React.useState(0);

    //funciones para area y perimetro de CUADRADO
    const FunctionAreaCuadrado = () => {
        setAreaCuadrado(sideCuadrado * sideCuadrado);
        setPerimetroCuadrado(0)
    }
    const FunctionPerimetroCuadrado = () => {
        setPerimetroCuadrado(sideCuadrado * 4);
        setAreaCuadrado(0)
    }



    return{
        sideCuadrado,
        setSideCuadrado,
        areaCuadrado,
        setAreaCuadrado,
        FunctionAreaCuadrado,
        perimetroCuadrado,
        FunctionPerimetroCuadrado,
    }
}

export default useCuadrado