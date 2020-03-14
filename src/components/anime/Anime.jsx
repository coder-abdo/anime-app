import React from "react";
import { Link } from "react-router-dom";
import { AnimeContainer } from "./AnimeStyle";
export const Anime = ({ image, title, url, score, id }) => (
  <AnimeContainer>
    <div className="more-detail">
      <Link data-testid="more-details" className="more-link" to={`/${id}`}>
        more details
      </Link>
    </div>
    <div className="imgContainer">
      <img src={image} alt={title} />
    </div>
    <div className="details">
      <h3 data-testid="anime-title">{title}</h3>
      <footer>
        <h4 data-testid="anime-score">score: {score}</h4>
        <a href={url}>myAnime list page</a>
      </footer>
    </div>
  </AnimeContainer>
);
