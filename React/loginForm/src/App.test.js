import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginHooks, { submitHandler } from "./component/Login/LoginHooks";
import "../setupTest";

describe("Test login form", () => {
  test("login form should be in the document", () => {
    const component = render(<LoginHooks />);
    const loginForm = component.getByTestId("login-form");
    expect(loginForm).toBeInTheDocument();
  });

  test("loginform should display a blank username and password inputbox", () => {
    const { getByTestId } = render(<LoginHooks />);
    const usernameInput = getByTestId("username");
    expect(usernameInput.value).toMatch("");

    const passwordInput = getByTestId("password");
    expect(passwordInput.value).toMatch("");
  });

  test("login form should allow entering a username", () => {
    const { getByTestId } = render(<LoginHooks />);
    const usernameInput = getByTestId("username");
    fireEvent.change(usernameInput, { target: { value: "test" } });
    expect(usernameInput.value).toMatch("test");
  });

  test("login form should allow entering a password", () => {
    const { getByTestId } = render(<LoginHooks />);
    const passwordInput = getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "12345" } });
    expect(passwordInput.value).toMatch("12345");
  });

  test("submit button should be able to submit form", () => {
    // 将jest.fn()赋值给onSubmit，并且把submitHandler作为props传给Login这个组件
    const onSubmit = jest.fn();
    const { getByTestId } = render(<LoginHooks submitHandler={onSubmit} />);
    const buttonNode = getByTestId("button");
    fireEvent.submit(buttonNode);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
