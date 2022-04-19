import {render, fireEvent, screen} from "@testing-library/react";
import {Input} from "./index";

test("render Input with placeholder", () => {
  render(<Input />);
  fireEvent.change(screen.getByPlaceholderText("Nickname"));
  const text = screen.getByPlaceholderText("Nickname");

  expect(text).toBeInTheDocument();
});

