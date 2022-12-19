import React from "react";

import ReactPaginate from "react-paginate";

const Paginas = ({ setPage, numPage }) => {
  return (
    <ReactPaginate
      nextLabel="Siguiente"
      previousLabel="Anterior"
      className="pagination justify-content-center gap-4 my-4"
      pageCount={numPage}
      nextClassName="btn  "
      previousClassName="btn "
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(page) => setPage(page.selected + 1)}
    />
  );
};
export default Paginas;
