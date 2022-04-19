import {render, screen} from "@testing-library/react";
import {Layout} from "./index";
import {BrowserRouter} from "react-router-dom";

test("render List", () => {
  render(
    <BrowserRouter>
      <Layout>
        <div data-testid="child">2</div>
      </Layout>
    </BrowserRouter>
  );

  const navbar = screen.queryByTestId("navbar");
  expect(navbar).toBeInTheDocument();
});
