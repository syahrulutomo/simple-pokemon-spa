import {render, screen} from "@testing-library/react";
import {List} from "./index";

test("render List", () => {
  render(
    <List>
      <div data-testid="child">1</div>
      <div data-testid="child">2</div>
    </List>
  );

  const children = screen.getAllByTestId("child");
  expect(children.length).toEqual(2);

  const toast = screen.queryByTestId("list");
  expect(toast).toBeInTheDocument();
});
