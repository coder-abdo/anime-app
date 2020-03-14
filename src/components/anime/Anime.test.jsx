import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import "@testing-library/jest-dom";
import { Anime } from "./Anime";
afterEach(cleanup);
describe("render Anime ", () => {
  const mockProps = {
    image: "some image url",
    title: "anime title",
    url: "dummy url",
    id: 12,
    score: 2
  };
  const history = createBrowserHistory();
  const { container, getByTestId } = render(
    <Router history={history}>
      <Anime {...mockProps} />
    </Router>
  );
  const animeTitle = getByTestId("anime-title");
  const animeScore = getByTestId("anime-score");
  test("render Anime Component with props properly", () => {
    expect(container).toBeInTheDocument();
  });
  test("more details after clicking the more detail button", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Anime {...mockProps} />
      </Router>
    );
    expect(history.length).toBe(1);
    fireEvent.click(getByTestId("more-details"));
    expect(history.length).toBe(2);
  });
  test("render anime title to be anime title", () => {
    expect(animeTitle.textContent).toBe("anime title");
  });
  test("render anime title to be 2", () => {
    expect(animeScore.textContent).toBe("score: 2");
  });
});
