import React, { useState } from "react";
import { useEffect } from "react";
import { MI_FETCHS } from "../constants/todoFetch/todoFetch";
import Paginas from "./Cards/Paginas";
import CardEpisodio from "./Cards/CardsEpisodio";

const Temporadas = () => {
  const [episodios, setEpisodios] = useState();
  const [pages, setPage] = useState(1);
  const [numPage, setNumPage] = useState();

  useEffect(() => {
    if (pages != null) {
      MI_FETCHS.FETCH_PAGE_EPISODIOS({ pages, setEpisodios });
      MI_FETCHS.FETCH_NUM_PAGE_EPISODIOS({ setNumPage });
    }
  }, [pages]);
  console.log("esto es pages", pages);

  // let cardList = <></>;
  // if (episodios != null) {
  //   if (pages !== null) {
  //     cardList = episodios.map((e) => (
  //       <SobreSerieCard keys={e.id}>
  //         <h1>Nombre: {e.name} </h1>
  //         <p>Fecha de lanzamiento:{e.air_date} </p>
  //         <p>Episodio numer: {e.episode}</p>
  //       </SobreSerieCard>
  //     ));
  //   }
  console.log("desde  Episodio", episodios);

  const load = () => {
    if (episodios != null) {
      return (
        <div>
          <Paginas setPage={setPage} numPage={numPage} />
          <CardEpisodio episodios={episodios} />
        </div>
      );
    }
  };

  return <div> {load()}</div>;
};

export default Temporadas;
