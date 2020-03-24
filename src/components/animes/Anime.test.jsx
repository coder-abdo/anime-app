import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { Animes } from "./Animes";

afterEach(cleanup);
test("render Animes Component by passing suitable props", () => {
  const history = createBrowserHistory();
  const mockANimesList = [
    {
      mal_id: "123-56hg",
      image_url: "image.jpg",
      title: "dummy title",
      score: 4.5,
      url: "https://www.anime-url.com"
    },
    {
      mal_id: "987-vnhg",
      image_url: "image2.jpg",
      title: "dummy2 title",
      score: 4.5,
      url: "https://www.anime-url.com"
    }
  ];
  const { container, asFragment } = render(
    <Router history={history}>
      <Animes animes={mockANimesList} />
    </Router>
  );
  expect(container).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
