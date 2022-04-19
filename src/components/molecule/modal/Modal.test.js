import {render, screen} from "@testing-library/react";
import {Modal} from "./index";

test("render Modal", () => {
  render(<Modal><span>Yeayy</span></Modal>);

  const children = screen.getByText("Yeayy");
  expect(children).toBeInTheDocument();

  const modal = screen.queryByTestId("modal");
  expect(modal).toBeInTheDocument();

  const overlay = screen.queryByTestId("overlay");
  expect(overlay).toBeInTheDocument();
});
