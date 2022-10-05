import React from 'react'

const useTriangulo = () => {
    const [sideTriangulo, setSideTriangulo] = React.useState('');
    const [baseTriangulo, setBaseTriangulo] = React.useState('');
    const [areaTriangulo, setAreaTriangulo] = React.useState(0);
    const [perimetroTriangulo, setPerimetroTriangulo] = React.useState(0);

    //Funciones para area y perimetro de TRIANGULO
    const FunctionAreaTriangulo = () => {
        setAreaTriangulo((baseTriangulo * sideTriangulo) / 2)
        setPerimetroTriangulo(0)
    }

    const FunctionPerimetroTriangulo = () => {
        setPerimetroTriangulo((sideTriangulo * 2) + baseTriangulo);
        setAreaTriangulo(0)
    }
    
    return{
        sideTriangulo, 
        setSideTriangulo,
        areaTriangulo, 
        FunctionAreaTriangulo,
        baseTriangulo, 
        setBaseTriangulo,
        perimetroTriangulo,
        FunctionPerimetroTriangulo
    }
}

export default useTriangulo