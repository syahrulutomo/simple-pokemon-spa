import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./index";

test("render Button with children", () => {
  render(<Button>Hit Me!</Button>);
  const text = screen.getByText("Hit Me!");
  
  fireEvent.click(screen.getByText("Hit Me!"))
  expect(text).toBeInTheDocument();
});

