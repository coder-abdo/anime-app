import React from "react";
import { Provider } from "react-redux";
import {
  render,
  cleanup,
  waitForElement,
  fireEvent
} from "@testing-library/react";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import "@testing-library/jest-dom";
import { Home } from "./home";
import { Store } from "../../redux/store/store";
afterEach(cleanup);
describe("render home page with list of animes and without", () => {
  const history = createBrowserHistory();
  test("render home page properly", () => {
    const { container, asFragment } = render(
      <Provider store={Store}>
        <Router history={history}>
          <Home />
        </Router>
      </Provider>
    );
    expect(container).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render loader before list anime", () => {
    const { getByTestId } = render(
      <Provider store={Store}>
        <Router history={history}>
          <Home />
        </Router>
      </Provider>
    );
    expect(getByTestId("loader")).toBeInTheDocument();
  });

  test("should render list of animes if there are list of animes", async () => {
    const { getByTestId } = render(
      <Provider store={Store}>
        <Router history={history}>
          <Home />
        </Router>
      </Provider>
    );
    const animesList = await waitForElement(() => getByTestId("animes"));
    expect(animesList).toBeInTheDocument();
  });
  test("fire submit button properly", () => {
    const { getByTestId } = render(
      <Provider store={Store}>
        <Router history={history}>
          <Home />
        </Router>
      </Provider>
    );
    expect(getByTestId("main-title").textContent).toMatch(/top 50 animes/gi);
    expect(getByTestId("search-input").value).toBe("");
    fireEvent.change(getByTestId("search-input"), {
      target: { value: "hero" }
    });
    expect(getByTestId("search-input").value).toBe("hero");
    fireEvent.click(getByTestId("search-submit-btn"));
    expect(getByTestId("main-title").textContent).toMatch(/hero results/gi);
  });
});
