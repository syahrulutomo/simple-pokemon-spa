import {render, screen} from "@testing-library/react";
import {Navbar} from "./index";
import {BrowserRouter} from "react-router-dom";

test("render Navbar", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  const img = screen.getAllByRole("img");
  expect(img.length).toEqual(2)
});
