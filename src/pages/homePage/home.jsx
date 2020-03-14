import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopAnimes } from "../../redux/actions/fetchAnimes";
import { Anime } from "../../components/anime/Anime";
import { Loader } from "../../components/loader/Loader";
import { Container, AnimesTitle } from "../../sharedStyle/Container";
export const Home = () => {
  const { animes } = useSelector(state => state.animes);
  const dispatch = useDispatch();
  // console.log(animes);
  useEffect(() => {
    dispatch(fetchTopAnimes());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <AnimesTitle>Top 50 Animes </AnimesTitle>
      <Container anime>
        {!!animes.length ? (
          animes.map(({ mal_id, image_url, url, score, title }) => (
            <Anime
              key={mal_id}
              image={image_url}
              title={title}
              score={score}
              url={url}
              id={mal_id}
            />
          ))
        ) : (
          <Loader />
        )}
      </Container>
    </>
  );
};
