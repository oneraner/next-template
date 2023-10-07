import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

test("app page", () => {
  render(<Page />);
  expect(screen.getByTestId("test")).toBeInTheDocument();
});
