import {render, screen} from "@testing-library/react";
import {Card} from "./index";
import Logo from "../../../assets/Pokemon-logo.webp";
import {BrowserRouter} from "react-router-dom";

test("render Card", () => {
  render(
    <BrowserRouter>
      <Card name="Success" image={Logo} />
    </BrowserRouter>
  );

  const img = screen.getByRole("img");
  expect(img).toBeInTheDocument();

  const text = screen.getByText("Success");
  expect(text).toBeVisible()
});
