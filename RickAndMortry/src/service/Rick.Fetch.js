import { API_RICK } from "../constants/Api.constants";

class RickFetch {
  async todosPersonajes() {
    const response = await fetch(API_RICK.PERSONAJES());
    return response.json();
  }

  async unPersonaje(id) {
    const response = await fetch(API_RICK.PERSONAJE_ID(id));
    console.log(response);
    return response.json();
  }

  async pages(id) {
    const response = await fetch(API_RICK.PERSONAJE_PAGES(id));
    console.log(response);
    return response.json();
  }
}

export default new RickFetch();
