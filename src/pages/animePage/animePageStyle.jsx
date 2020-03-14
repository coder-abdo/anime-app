import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 1.6rem;
    margin: 2rem 0 3rem;
    color: var(--secondary-color);
    font-weight: 400;
  }
`;
export const Image = styled.img`
  width: 50rem;
  height: 30rem;
  object-fit: cover;
  align-self: center;
`;
