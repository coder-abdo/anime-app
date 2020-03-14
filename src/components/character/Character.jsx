import React from "react";
import { CharacterContainer } from "./CharacterStyle";
export const Character = ({ image_url, role, name }) => {
  return (
    <CharacterContainer>
      <div className="imgContainer">
        <img src={image_url} alt={name} />
      </div>
      <footer>
        <h4 data-testid="character-name">name: {name}</h4>
        <h4 data-testid="character-role">role: {role}</h4>
      </footer>
    </CharacterContainer>
  );
};
