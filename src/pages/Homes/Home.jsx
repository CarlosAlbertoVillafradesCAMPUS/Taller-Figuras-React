import React from "react";
import ContWorkshops from "./components/ContWorkshops";
import Workshops from "./components/Workshops";
import Footer from "./components/Footer";
import useListWorkshop from "./hooks/useListWorkshop";
import './styles/Home.scss';

const Home = () => {
const{ WorkshopList } = useListWorkshop();

  return (
    <div className="cont-index">
      <ContWorkshops>
        {WorkshopList.map((work) => (
          <Workshops work={work} key={work.id} />
        ))}
      </ContWorkshops>
      <Footer />
    </div>
  );
};

export default Home;
