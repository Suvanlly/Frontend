import React from "react";
import { shallow } from "enzyme";
import { render, fireEvent } from "@testing-library/react";
import "../enzymeConfig";
import Login from "./component/Login/Login";

describe("Test login form", () => {
  test("username check", () => {
    const wrapper = shallow(<Login />);
    wrapper
      .find('input[type="text"]')
      .simulate("change", { target: { name: "username", value: "sophie" } });
    expect(wrapper.state("username")).toEqual("sophie");
  });
});
