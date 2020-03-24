import styled from "styled-components";

export const CharacterContainer = styled.div`
  box-shadow: 0 0 1rem 0 var(--secondary-color);
  .imgContainer {
    height: 75%;
    overflow: hidden;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    &:hover {
      img {
        transform: scale(1.05);
      }
    }
    img {
      width: 100%;
      height: 100%;
      transition: transform 0.3s linear;
    }
  }
  footer {
    display: flex;
    flex-direction: column;
    background-color: var(--main-color);
    color: var(--text-color-2);
    padding: 0.5rem 1rem;
    height: 25%;
    h4 {
      font-size: 1.4rem;
    }
  }
`;
