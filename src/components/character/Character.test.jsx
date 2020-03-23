import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Character } from "./Character";
afterEach(cleanup);
test("render Charcter properley", () => {
  const mokeCharacter = {
    image_url: "just photo",
    name: "john name",
    role: "hero"
  };
  const { container, getByTestId, asFragment } = render(
    <Character {...mokeCharacter} />
  );
  expect(container).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
  expect(getByTestId("character-name").textContent).toBe("name: john name");
  expect(getByTestId("character-role").textContent).toBe("role: hero");
});
