const heroesImage = require.context('../assets/heroes', true);

export const getHeroeImageById = (id) => {
  return heroesImage(`./${id}.jpg`).default
}