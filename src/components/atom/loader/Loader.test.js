import {render, screen} from "@testing-library/react";
import {Loader} from "./index";

test("render Loader", () => {
  render(<Loader />);

  const loader = screen.queryByTestId('styled-loader');
  expect(loader).toBeInTheDocument();
});