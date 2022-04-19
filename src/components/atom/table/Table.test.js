import {render, screen} from "@testing-library/react";
import {Table} from "./index";

test("render Table", () => {
  const props = {
    header: [
      {
        key: "no",
        label: "No.",
      },
      {
        key: "move",
        label: "Move",
      },
    ],
    data: [
      {no: 1, move: "swords-dance"},
      {no: 2, move: "cut"},
    ],
  };

  render(<Table {...props} />);

  expect(screen.queryAllByRole('row')).toHaveLength(3);
  expect(screen.queryAllByRole('columnheader')).toHaveLength(2);
});
