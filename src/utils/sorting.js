export const filterByGenre = (list, genre) => {
  const filteredAnimes = [...list];
  return filteredAnimes.filter(anime => anime[genre]);
};
