import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Homes/Home";
import Figuras from "../pages/Figuras/Figuras";
import Descuentos from "../pages/Descuentos/Descuentos";
import Promedio from "../pages/Promedio/Promedio";
import Mediana from "../pages/Mediana/Mediana";
import NotFound from "../pages/NotFound/NotFound";
import "../styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/figuras" element={<Figuras />} />
          <Route path="/descuentos" element={<Descuentos />} />
          <Route path="/promedio" element={<Promedio />} />
          <Route path="/mediana" element={<Mediana />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
