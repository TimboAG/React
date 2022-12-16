import React, { useState, useEffect } from "react";
import RickFetch from "../service/Rick.Fetch";
// import { todosPersonajes } from "../service/Rick.Fetch";
import Cards from "./Cards/Cards";
import Titulo from "./Cards/Titulo";

const Main = () => {
  const [personajeLista, setPersonajeLista] = useState([]);

  const fetchPersonajes = async () => {
    RickFetch.todosPersonajes()
      .then((data) => setPersonajeLista(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchPersonajes();
  }, []);

  return (
    <div>
      <Titulo />
      <Cards personajes={personajeLista} />
    </div>
  );
};

export default Main;
