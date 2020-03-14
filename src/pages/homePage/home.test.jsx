import React from "react";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Home } from "./home";
import { Store } from "../../redux/store/store";
afterEach(cleanup);
test("render home page properly", () => {
  const { container } = render(
    <Provider store={Store}>
      <Home />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
