import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders footer with contact information", () => {
  render(<App />);
  const linkElement = screen.getByText(/thedhanumamidi@gmail.com/);
  expect(linkElement).toBeInTheDocument();
});
