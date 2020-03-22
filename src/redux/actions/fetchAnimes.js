import {
  FETCH_ANIMES,
  FETCH_CHARACTERS,
  FETCH_ANIME,
  SEARCH_ANIME
} from "../actionsTypes/actionsTypes";
import axios from "axios";
import { topAnimes, singleAnime, searchAnime } from "../../constants/urls";
export const fetchTopAnimes = () => {
  return dispatch => {
    return axios.get(topAnimes).then(({ data }) => {
      dispatch({ type: FETCH_ANIMES, payload: data.top });
    });
  };
};
export const fetchSingleAnime = id => {
  return dispatch => {
    return axios.get(`${singleAnime}${id}`).then(({ data }) => {
      dispatch({
        type: FETCH_ANIME,
        payload: data
      });
    });
  };
};
export const fetchCharacters = id => {
  return dispatch => {
    return axios
      .get(`${singleAnime}${id}/characters_staff`)
      .then(({ data }) => {
        // console.log(data);
        dispatch({ type: FETCH_CHARACTERS, payload: data.characters });
      });
  };
};
export const searchAnimes = query => {
  return dispatch => {
    return axios
      .get(`${searchAnime}${query}`)
      .then(({ data }) => {
        dispatch({ type: SEARCH_ANIME, payload: data.results });
        localStorage.setItem("animes", JSON.stringify(data.results));
        return data;
      })
      .then(data => {
        console.log(data);
      });
  };
};
