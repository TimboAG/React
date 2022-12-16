export const API_RICK = {
  URL: "https://rickandmortyapi.com/api",
  PERSONAJES: function () {
    return `${this.URL}/character`;
  },

  PERSONAJE_ID: function (id) {
    return `${this.URL}/character/${id}`;
  },
};
