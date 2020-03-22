import styled from "styled-components";

export const SearchAnimeForm = styled.form`
  display: flex;
  max-width: 60%;
  width: 100%;
  input[type="text"] {
    width: 100%;
    height: 4rem;
    color: #333;
    border-radius: 3px;
    border: 1px solid #eee;
    padding: 1rem 2rem;
    font-size: 1.4rem;
    &:focus {
      outline: none;
      box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.15);
    }
  }
  button[type="submit"] {
    padding: 1rem 2rem;
    font-size: 1.4rem;
    margin-left: 0.5rem;
    background-color: purple;
    color: #fff;
    border: 1px solid purple;
    transition: background-color 0.3s ease, color 0.3s ease;
    border-radius: 3px;
    &:hover {
      cursor: pointer;
      background-color: #fff;
      color: purple;
    }
  }
`;
