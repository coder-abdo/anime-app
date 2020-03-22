import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSingleAnime,
  fetchCharacters
} from "../../redux/actions/fetchAnimes";
import { Loader } from "../../components/loader/Loader";
import { Character } from "../../components/character/Character";
import {
  AnimesTitle,
  Container,
  ButtonLink
} from "../../sharedStyle/Container";
import { Image, PageContainer } from "./animePageStyle";
export const AnimePage = () => {
  const { id } = useParams();
  const { singleAnime, characters } = useSelector(({ animes }) => animes);
  // console.log(singleAnime, characters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleAnime(id));
    dispatch(fetchCharacters(id));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {singleAnime ? (
        <PageContainer>
          <AnimesTitle data-testid="single-anime-title">
            {singleAnime.title}
          </AnimesTitle>
          <Image src={singleAnime.image_url} alt={singleAnime.title} />
          <p data-testid="synopsis">{singleAnime.synopsis}</p>
          {!!characters.length ? (
            <Container data-testid="characters-container">
              {characters
                .sort((a, b) => +a.male_id - +b.male_id)
                .map(character => (
                  <Character key={character.mal_id} {...character} />
                ))}
            </Container>
          ) : (
            <Loader />
          )}
          <ButtonLink isback="back" to="/" data-testid="back-btn">
            Back to Animes
          </ButtonLink>
        </PageContainer>
      ) : (
        <Loader />
      )}
    </>
  );
};
