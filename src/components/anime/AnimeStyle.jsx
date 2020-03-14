import styled from "styled-components";

export const AnimeContainer = styled.div`
  position: relative;
  box-shadow: 0 0 1rem 0 var(--secondary-color);
  &:hover {
    cursor: pointer;
    .more-detail {
      transform: scale(1);
    }
  }
  .more-detail {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 75%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background-color: var(--secondary-color);
    transform: scale(0);
    transition: transform 0.3s ease-out;
    .more-link {
      background-color: darkorange;
      color: #fff;
      padding: 1rem 2rem;
      font-size: 1.4rem;
      box-shadow: none;
      transition: box-shadow 0.3s ease-out;
      &:hover {
        box-shadow: 2px 2px 0 #fff;
      }
    }
  }
  .imgContainer {
    height: 75%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .details {
    background-color: var(--main-color);
    color: var(--text-color-2);
    padding: 0.5rem 1rem;
    height: 25%;
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }
    footer {
      display: flex;
      flex-direction: column;
      h4 {
        font-size: 1.4rem;
      }
      a {
        font-size: 1.4rem;
      }
    }
  }
`;
