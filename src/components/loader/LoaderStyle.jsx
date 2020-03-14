import styled from "styled-components";
export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Loading = styled.div`
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  border: 1.8rem solid #9a168563;
  border-top: 1.8rem solid purple;
  animation: spin 3s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(720deg);
    }
  }
`;
