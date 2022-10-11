import React from "react";
import ContButtons from "./components/ContButtons";
import Footer from "../../components/Footer";
import "./styles/Figuras.scss";
import Cuadrado from "./components/Cuadrado";
import Triangulo from "./components/Triangulo";
import Circulo from "./components/Circulo";
import useCuadrado from "./hooks/useCuadrado";
import useTriangulo from "./hooks/useTriagulo";
import useCirculo from "./hooks/useCirculo";
import Buttons from "../../components/Buttons";

const Figuras = () => {
  const {
    sideCuadrado,
    setSideCuadrado,
    areaCuadrado,
    FunctionAreaCuadrado,
    perimetroCuadrado,
    FunctionPerimetroCuadrado,
  } = useCuadrado();

  const {
    sideTriangulo,
    setSideTriangulo,
    areaTriangulo,
    FunctionAreaTriangulo,
    baseTriangulo,
    setBaseTriangulo,
    perimetroTriangulo,
    FunctionPerimetroTriangulo
  } = useTriangulo();

  const {
    stateCirculo,
    setStateCirculo,
    FunctionAreaCirculo,
    FunctionPerimetroCirculo
  } = useCirculo();

  return (
    <div className="fondo-principal">
      <div className="cont-principal">
        <div className="cont-title">
          <h2 className="title-figuras">Talle#1 Figuras Geometricas</h2>
          <p className="descripcion">
            Este es el primer taller del curso practico de javascript, en donde
            calcularemos el area y perimetro de unas figuras geometricas.
          </p>
        </div>
        <div className="cont-section-principal">
          <Cuadrado
            areaCuadrado={areaCuadrado}
            sideCuadrado={sideCuadrado}
            setSideCuadrado={setSideCuadrado}
            perimetroCuadrado={perimetroCuadrado}
          >
            <ContButtons>
              <Buttons title='Calcular Area' Function={() => FunctionAreaCuadrado()} />
              <Buttons
                title='Calcular Perimetro' Function={() => FunctionPerimetroCuadrado()}
              />
            </ContButtons>
          </Cuadrado>
          <Triangulo
            areaTriangulo={areaTriangulo}
            sideTriangulo={sideTriangulo}
            setSideTriangulo={setSideTriangulo}
            baseTriangulo={baseTriangulo}
            setBaseTriangulo={setBaseTriangulo}
            perimetroTriangulo={perimetroTriangulo}
          >
            <ContButtons>
              <Buttons title='Calcular Area' Function={() => FunctionAreaTriangulo()} />
              <Buttons title='Calcular Perimetro' Function={() => FunctionPerimetroTriangulo()} />
            </ContButtons>
          </Triangulo>
        </div>
        <div className="cont-section-sec">
          <Circulo
          stateCirculo={stateCirculo}
          setStateCirculo={setStateCirculo}>
            <ContButtons>
              <Buttons title='Calcular Area' Function={() => FunctionAreaCirculo()} />
              <Buttons title='Calcular Perimetro' Function={() => FunctionPerimetroCirculo()} />
            </ContButtons>
          </Circulo>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Figuras;
