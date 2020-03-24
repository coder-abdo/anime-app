import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopAnimes, searchAnimes } from "../../redux/actions/fetchAnimes";
import { Animes } from "../../components/animes/Animes";
import { Loader } from "../../components/loader/Loader";
import { AnimesTitle } from "../../sharedStyle/Container";
import { SearchAnimeForm } from "./homePageStyle";
export const Home = () => {
  const { animes } = useSelector(state => state.animes);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("top 50 animes");
  const handleQueryChange = e => {
    setQuery(e.target.value);
  };
  const handleQuerySubmit = e => {
    e.preventDefault();
    if (query) {
      dispatch(searchAnimes(query));
      setTitle(`${query} results`);
    }
    setQuery("");
  };
  useEffect(() => {
    dispatch(fetchTopAnimes());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <SearchAnimeForm onSubmit={handleQuerySubmit}>
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Search Your Fav Anime"
          data-testid="search-input"
        />
        <button type="submit" data-testid="search-submit-btn">
          search
        </button>
      </SearchAnimeForm>
      <AnimesTitle data-testid="main-title">{title} </AnimesTitle>
      <>{!!animes.length ? <Animes animes={animes} /> : <Loader />}</>
    </>
  );
};
