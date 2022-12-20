import React, { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards";
import { MI_FETCHS } from "../../constants/todoFetch/todoFetch";
import Paginas from "./Paginas";
import { MyAlert, MyBuscador } from "../../assets/style/ComponentesEstilizados";
import Alert from "@mui/material/Alert";

const Buscador = (props) => {
  const [texto, setTexto] = useState("");
  const [personajeDetalle, setPersonajeDetalle] = useState("");

  const handleInputChange = ({ target }) => {
    setTexto(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(texto);
    load();
  };

  useEffect(() => {
    if (texto !== " ") {
      MI_FETCHS.FETCH_POR_NOMBRE({ texto, setPersonajeDetalle });
    }
  }, [texto]);

  const load = () => {
    if (personajeDetalle !== undefined) {
      if (texto !== "") {
        return (
          <div>
            <Cards personajes={personajeDetalle} />
          </div>
        );
      } else {
        return (
          <div>
            <Paginas setPage={props.setPage} numPage={props.numPage} />
            <Cards personajes={props.props} />
          </div>
        );
      }
    } else {
      return (
        <div>
          <MyAlert>
            <Alert variant="filled" severity="error">
              El personaje buscado no existe — Intentelo de nuevo!
            </Alert>
          </MyAlert>
          <Paginas setPage={props.setPage} numPage={props.numPage} />
          <Cards personajes={props.props} />
        </div>
      );
    }
  };

  return (
    <>
      <section className="filtrar">
        <form onSubmit={handleSubmit}>
          <MyBuscador
            type="text"
            name="buscar"
            placeholder="Nombre del personaje que quiere buscar"
            value={texto}
            onChange={handleInputChange}
          />
        </form>
      </section>
      {load()}
    </>
  );
};
export default Buscador;
