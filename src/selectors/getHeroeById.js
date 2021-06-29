import { heroes } from "../data/Heroes"

export const getHeroesById = (id) => {
  return heroes.finde(heroe => heroe.id === id)
};