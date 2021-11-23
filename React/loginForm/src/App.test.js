import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App, { validateInput } from "./App";

test("login form should be in the document", () => {
  const component = render(<App />);
  // console.log(component)
  const inputNode = component.getByText("Email:");
  expect(inputNode).toBeInTheDocument();
});
