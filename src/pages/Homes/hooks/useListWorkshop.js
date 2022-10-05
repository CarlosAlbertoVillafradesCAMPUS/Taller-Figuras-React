import React from 'react';
import imgFiguras from "@images/figuras.jpg";
import imgDescuentos from "@images/descuentos.png";
import imgPromedio from "@images/promedio.jpg";
import imgMediana from "@images/mediana.jpg";

const useListWorkshop = () => {
    const WorkshopList = [
        {
          id: 0,
          name: "Taller#1 Figuras",
          url: "/figuras",
          image: imgFiguras,
        },
        {
          id: 1,
          name: "Taller#2 Descuentos",
          url: "/descuentos",
          image: imgDescuentos,
        },
        {
          id: 2,
          name: "Taller#3 Promedio",
          url: "/promedio",
          image: imgPromedio,
        },
        {
          id: 3,
          name: "Taller#4 Mediana",
          url: "/mediana",
          image: imgMediana,
        },
      ];
    
  return{
    WorkshopList
  }
}

export default useListWorkshop