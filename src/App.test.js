import React from "react";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { Store } from "./redux/store/store";
afterEach(cleanup);
test("renders the app properly", () => {
  const { container, asFragment } = render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
