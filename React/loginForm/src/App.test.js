import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "./component/Login/Login";
import "../setupTest";

describe("Test login form", () => {
  test("login form should be in the document", () => {
    const component = render(<Login />);
    const loginForm = component.getByTestId("login-form");
    expect(loginForm).toBeInTheDocument();
  });

  test("loginform should display a blank username and password inputbox", () => {
    const { getByTestId } = render(<Login />);
    const usernameInput = getByTestId("username");
    expect(usernameInput.value).toMatch("");

    const passwordInput = getByTestId("password");
    expect(passwordInput.value).toMatch("");
  });

  test("should allow entering a username", () => {});
});
