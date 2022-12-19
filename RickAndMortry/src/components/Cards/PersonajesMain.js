import React, { useState, useEffect } from "react";
// import RickFetch from "../../service/Rick.Fetch";
import Cards from "./Cards";
import Titulo from "./Titulo";
import Paginas from "./Paginas";
import { MI_FETCHS } from "../todoFetch/todoFetch";

export const PersonajesMain = () => {
  const [page, setPage] = useState(1);
  const [infoPage, setIntoPage] = useState();
  const [numPage, setNumPage] = useState();

  useEffect(() => {
    if (page != null) {
      MI_FETCHS.FETCH_PAGE({ page, setIntoPage });
      MI_FETCHS.FETCH_NUM_PAGE({ setNumPage });
    }
  }, [page]);

  const load = () => {
    if (infoPage != null) {
      return (
        <div>
          <Titulo />
          <Paginas setPage={setPage} numPage={numPage} />
          <Cards personajes={infoPage} />
        </div>
      );
    }
  };

  // if (infoPage != null) {
  //   if (page === 42) {
  //     return (
  //       <div>
  //         {" "}
  //         <Titulo />
  //         <button
  //           className="btn btn-primary btn-sm"
  //           onClick={() => setPage(page - 1)}
  //         >
  //           {" "}
  //           Pagina {page - 1}
  //         </button>
  //         <Cards personajes={infoPage} />
  //       </div>
  //     );
  //   } else if (page > 1) {
  //     return (
  //       <div>
  //         {" "}
  //         <Titulo />
  //         <button
  //           className="btn btn-primary btn-sm"
  //           onClick={() => setPage(page - 1)}
  //         >
  //           {" "}
  //           Pagina {page - 1}
  //         </button>
  //         <button
  //           className="btn btn-primary btn-sm"
  //           onClick={() => setPage(page + 1)}
  //         >
  //           Pagina {page}
  //         </button>
  //         <Cards personajes={infoPage} />
  //       </div>
  //     );
  //   } else if (page === 1) {
  //     return (
  //       <div>
  //         {" "}
  //         <Titulo />
  //         <button
  //           className="btn btn-primary btn-sm"
  //           onClick={() => setPage(page + 1)}
  //         >
  //           Pagina {page}
  //         </button>
  //         <Cards personajes={infoPage} />
  //       </div>
  //     );
  //   }
  //   }
  // };

  return <div>{load()}</div>;
};
