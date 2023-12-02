import React from "react";
import Card from "../Components/Card";
import { useApiOdont } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const{state}= useApiOdont()
  const{favs} = state

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
      {favs.map(item => <Card item={item} key={item.id}/>)}
      </div>
    </>
  );
};

export default Favs;
