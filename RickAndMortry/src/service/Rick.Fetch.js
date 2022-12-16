import { API_RICK } from "../constants/Api.constants";

// export const todosPersonajes = async () => {
//   const response = await fetch(API_RICK.PERSONAJES());
//   return response.json;
// };

// export const unPersonaje = async (id) => {
//   const response = await fetch(API_RICK.PERSONAJE_ID(id));
//   return response.json;
// };

class RickFetch {
  async todosPersonajes() {
    const response = await fetch(API_RICK.PERSONAJES());
    return response.json();
  }

  async unPersonaje(id) {
    const response = await fetch(API_RICK.PERSONAJE_ID(id));
    return response.json;
  }
}

export default new RickFetch();
