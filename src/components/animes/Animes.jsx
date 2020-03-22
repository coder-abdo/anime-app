import React from "react";
import { Anime } from "../anime/Anime";
import { Container } from "../../sharedStyle/Container";
export const Animes = ({ animes }) => {
  return (
    <Container anime="anime" data-testid="animes">
      {animes.map(({ mal_id, image_url, url, score, title }) => (
        <Anime
          key={mal_id}
          image={image_url}
          title={title}
          score={score}
          url={url}
          id={mal_id}
          data-testid="animes"
        />
      ))}
    </Container>
  );
};
