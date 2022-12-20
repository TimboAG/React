export const API_RICK = {
  URL: "https://rickandmortyapi.com/api",
  PERSONAJES: function () {
    return `${this.URL}/character`;
  },

  PERSONAJE_ID: function (id) {
    return `${this.URL}/character/${id}`;
  },

  PERSONAJE_PAGES: function (page) {
    return `${this.URL}/character/?page=${page}`;
  },
  PERSONAJE_POR_NOMBRE: function (texto) {
    return `${this.URL}/character/?name=${texto}`;
  },
};
