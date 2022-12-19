import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonCard, MyCard } from "../../assets/style/ComponentesEstilizados";
import RickFetch from "../../service/Rick.Fetch";
import OneCard from "./OneCard";
import { Volver } from "./Volver";

const Detalles = () => {
  const { id } = useParams();

  const [personajeD, setPersonajeD] = useState({});

  const fetchPersonajes = async (id) => {
    RickFetch.unPersonaje(id)
      .then((res) => res)
      .then((res = Response) => {
        setPersonajeD(res);
      })
      .catch(console.log);
  };

  useEffect(() => {
    fetchPersonajes(id);
  }, [id]);

  console.log("esto es personajeD", personajeD);

  if (Object.keys(personajeD).length === 0) {
    fetchPersonajes(id);
  } else {
    return (
      <MyCard>
        <OneCard personaje={personajeD} key={personajeD.id} />
        <ButtonCard>
          <Volver />
        </ButtonCard>
      </MyCard>
    );
  }
};

export default Detalles;
