import RickFetch from "../../service/Rick.Fetch";

export const MI_FETCHS = {
  FETCH_NUM_PAGE: function ({ setNumPage }) {
    const myOneOne = RickFetch.todosPersonajes()
      .then((data) => setNumPage(data.info.pages))
      .catch(console.log);
    return myOneOne;
  },

  FETCH_PAGE: function ({ page, setIntoPage }) {
    const myOne = RickFetch.pages(page)
      .then((res) => res)
      .then((res = Response) => {
        setIntoPage(res.results);
      })
      .catch(console.log);
    return myOne;
  },
};
