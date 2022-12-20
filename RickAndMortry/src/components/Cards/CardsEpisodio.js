import React from "react";
import OneCardEpisodio from "./OneCardEpisodios";
import { MyCard } from "../../assets/style/ComponentesEstilizados.js";

const CardsEpisodios = (episodios) => {
  console.log("desdeCardEpisodio", episodios.episodios);
  const myNuevo = [];
  console.log("nuevo", myNuevo);
  const cardList = episodios.episodios.map((p) => (
    <MyCard>
      <OneCardEpisodio episodio={p} key={p.id} />{" "}
    </MyCard>
  ));

  return <div> {cardList} </div>;
};

export default CardsEpisodios;
