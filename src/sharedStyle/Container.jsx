import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: ${props => (props.anime === "anime" ? "50rem" : "25rem")};
  grid-gap: 2rem;
  @media (max-width: 50em) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 37.5em) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 25em) {
    grid-template-columns: 1fr;
  }
`;
export const AnimesTitle = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color);
`;
export const ButtonLink = styled(Link)`
  background-color: darkorange;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  box-shadow: none;
  align-self: ${props => (props.isback === "back" ? "flex-start" : "center")};
  margin: ${props => (props.isback === "back" ? "2rem 0" : "")};
  transition: box-shadow 0.3s ease-out;
  &:hover {
    box-shadow: ${props =>
      props.isback === "back"
        ? "2px 2px 0 var(--text-color)"
        : "2px 2px 0 #fff"};
  }
`;
