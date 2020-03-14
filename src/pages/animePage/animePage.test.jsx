import React from "react";
import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import "@testing-library/jest-dom";
import { Store } from "../../redux/store/store";
import { AnimePage } from "./animePage";
afterEach(cleanup);

describe("render single anime page", () => {
  const history = createBrowserHistory();
  const { container, getByTestId } = render(
    <Provider store={Store}>
      <Router history={history}>
        <AnimePage />
      </Router>
    </Provider>
  );
  test("the anime page render in the document", () => {
    expect(container).toBeInTheDocument();
  });
});
