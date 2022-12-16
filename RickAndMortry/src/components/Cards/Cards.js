import React from "react";
import OneCard from "./OneCard";

const Cards = ({ personajes }) => {
  const cardList = personajes.map((p) => <OneCard personaje={p} key={p.id} />);
  return <div>{cardList}</div>;
};

export default Cards;
