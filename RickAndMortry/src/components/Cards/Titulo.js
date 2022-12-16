import React from "react";
import {
  RickAndmorty,
  LetraChica,
  LetraGrande,
} from "../../assets/style/ComponentesEstilizados.js";

const Titulo = () => {
  const subtTitulo = "Personajes";
  return (
    <div>
      <RickAndmorty>
        <LetraGrande>R</LetraGrande>ick <LetraChica>and</LetraChica>{" "}
        <LetraGrande>M</LetraGrande>orty
      </RickAndmorty>
      <h1>{subtTitulo}</h1>
    </div>
  );
};

export default Titulo;
