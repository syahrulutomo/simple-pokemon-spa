import {render, screen} from "@testing-library/react";
import {Toast} from "./index";

test("render Toast", () => {
  render(<Toast message="Success" />);

  const toast = screen.queryByTestId("toast");
  expect(toast).toBeInTheDocument();

  const text = screen.getByText("Success");
  expect(text).toBeInTheDocument();
});
