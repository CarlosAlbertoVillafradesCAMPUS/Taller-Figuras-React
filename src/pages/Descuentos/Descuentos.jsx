import React from "react";
import Footer from "../Homes/components/Footer";
import FormDescuentos from "./components/FormDescuentos";
import Button from "./components/Button";
import "./styles/Descuentos.scss";
import useDescuentos from "./hooks/useDescuentos";

const Descuentos = () => {
  const {
    stateDescuentos,
    setStateDescuentos,
    CalcDescuento} = useDescuentos();

  return (
    <div className="fondo">
      <div className="cont-principal-descuentos">
        <div className="cont-title-descuentos">
          <h1>Taller#2 Porcentajes y Descuentos</h1>
          <p>
            En este taller vamos a aplicarle unos descuentos a unos precios de
            productos
          </p>
        </div>
        <div className="cont-section-des">
          <FormDescuentos
          stateDescuentos={stateDescuentos}
          setStateDescuentos={setStateDescuentos}>
            <Button CalcDescuento={() => CalcDescuento()} />
          </FormDescuentos>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Descuentos;
