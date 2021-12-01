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

  test("login form should allow entering a username", () => {
    const { getByTestId } = render(<Login />);
    const usernameInput = getByTestId("username");
    fireEvent.change(usernameInput, { target: { value: "test" } });
    expect(usernameInput.value).toMatch("test");
  });

  test("login form should allow entering a password", () => {
    const { getByTestId } = render(<Login />);
    const passwordInput = getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "12345" } });
    expect(passwordInput.value).toMatch("12345");
  });
});
