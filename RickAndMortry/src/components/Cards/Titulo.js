import React from "react";
import {
  RickAndmorty,
  LetraChica,
  LetraGrande,
  MyH1,
} from "../../assets/style/ComponentesEstilizados.js";

const Titulo = () => {
  const subtTitulo = "Personajes";
  return (
    <div>
      <RickAndmorty>
        <LetraGrande>R</LetraGrande>ick <LetraChica>and</LetraChica>{" "}
        <LetraGrande>M</LetraGrande>orty
      </RickAndmorty>
      <MyH1>{subtTitulo}</MyH1>
    </div>
  );
};

export default Titulo;
