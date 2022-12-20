import React from "react";
import OneCard from "./OneCard";
import VerDetallesCard from "./VerDetallesCard";
import {
  MyCard,
  ButtonCard,
} from "../../assets/style/ComponentesEstilizados.js";

const Cards = ({ personajes }) => {
  const cardList = personajes.map((p) => (
    <MyCard>
      <OneCard personaje={p} key={p.id} />{" "}
      <ButtonCard>
        <VerDetallesCard personaje={p} key={p.id} />
      </ButtonCard>
    </MyCard>
  ));

  return <div>{cardList}</div>;
};

export default Cards;
