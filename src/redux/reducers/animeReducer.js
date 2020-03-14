import {
  FETCH_ANIMES,
  FETCH_CHARACTERS,
  FETCH_ANIME
} from "../actionsTypes/actionsTypes";
const initialState = {
  animes: [],
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
    default:
      return state;
  }
};
