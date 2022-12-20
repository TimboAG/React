import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonCard, MyCard } from "../../assets/style/ComponentesEstilizados";
import OneCard from "./OneCard";
import { Volver } from "./Volver";
import { MI_FETCHS } from "../../constants/todoFetch/todoFetch";

const Detalles = () => {
  const { id } = useParams();

  const [personajeD, setPersonajeD] = useState({});

  const fetchPersonajes = async (id, setPersonajeD) => {
    MI_FETCHS.FETCH_UN_PERSONAJE(id, setPersonajeD);
  };

  useEffect(() => {
    fetchPersonajes(id, setPersonajeD);
  }, [id]);

  console.log("esto es personajeD", personajeD);

  if (Object.keys(personajeD).length === 0) {
    fetchPersonajes(id, setPersonajeD);
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
