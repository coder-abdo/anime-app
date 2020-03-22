import {
  FETCH_ANIMES,
  FETCH_CHARACTERS,
  FETCH_ANIME,
  SEARCH_ANIME
} from "../actionsTypes/actionsTypes";
const initialState = {
  animes: JSON.parse(localStorage.getItem("animes")) || [],
  singleAnime: {},
  characters: []
};

export const animeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ANIMES:
      return {
        ...state,
        animes: payload
      };

    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: payload
      };
    case FETCH_ANIME:
      return {
        ...state,
        singleAnime: payload
      };
    case SEARCH_ANIME:
      return {
        ...state,
        animes: payload
      };
    default:
      return state;
  }
};
