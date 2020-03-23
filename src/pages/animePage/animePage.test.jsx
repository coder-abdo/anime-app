import React from "react";
import { Provider } from "react-redux";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/react";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import "@testing-library/jest-dom";
import { Store } from "../../redux/store/store";
import { AnimePage } from "./animePage";
afterEach(cleanup);

describe("render single anime page", () => {
  const history = createBrowserHistory();
  const { container, asFragment } = render(
    <Provider store={Store}>
      <Router history={history}>
        <AnimePage />
      </Router>
    </Provider>
  );
  test("the anime page render in the document", () => {
    expect(container).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
  test("should render loader before characters of anime", () => {
    const { getByTestId } = render(
      <Provider store={Store}>
        <Router history={history}>
          <AnimePage />
        </Router>
      </Provider>
    );
    expect(getByTestId("loader")).toBeInTheDocument();
  });
  test("should render the characters of anime after some delay", async () => {
    const { getByTestId } = render(
      <Provider store={Store}>
        <Router history={history}>
          <AnimePage />
        </Router>
      </Provider>
    );
    const charactersList = await waitForElement(() =>
      getByTestId("characters-container")
    );
    expect(charactersList).toBeInTheDocument();
  });
  test("should go back to home page after clicking the submit button", () => {
    const { getByTestId } = render(
      <Provider store={Store}>
        <Router history={history}>
          <AnimePage />
        </Router>
      </Provider>
    );
    fireEvent.click(getByTestId("back-btn"));
    console.log(history.length);
    expect(history.length).toBe(2);
  });
});
