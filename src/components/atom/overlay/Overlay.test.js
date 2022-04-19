import {render, screen} from "@testing-library/react";
import {Overlay} from "./index";

test("render Overlay", () => {
  render(<Overlay />);

  const overlay = screen.queryByTestId('overlay');
  expect(overlay).toBeInTheDocument();
});