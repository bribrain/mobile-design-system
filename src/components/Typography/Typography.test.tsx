import React from "react";
import { render } from "@testing-library/react";

import Typography from "./Typography";

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(
      <Typography
        text={"Hello world!"}
        variant={"heading-1"}
        weight={"regular"}
      />
    );
  });

  test("renders the Typography component with default state", () => {
    render(<Typography />);
  });
});
