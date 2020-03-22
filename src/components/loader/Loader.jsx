import React from "react";
import { LoadingContainer, Loading } from "./LoaderStyle";
export const Loader = () => {
  return (
    <LoadingContainer data-testid="loader">
      <Loading />
    </LoadingContainer>
  );
};
