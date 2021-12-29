import React, { useState } from "react";
import axios from "axios";
import { Input, InputWrap, Button, Label } from "./styles/login";

const LoginHooks = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // const { username, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (event) => {
    // event.preventDeafault(): prevent submiting the form until formValue assigned
    event.preventDefault();
    axios
      .post(
        "https://loginform-fd027-default-rtdb.firebaseio.com/data.json",
        formData
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <InputWrap>
      <form data-testid="login-form" onSubmit={submitHandler}>
        <Label htmlFor="username">Username:</Label>
        <Input
          type="text"
          id="username"
          data-testid="username"
          // make input username value appear on the input box
          value={formData.username}
          // whenever user type something inside input box, onChange event will be executed
          onChange={onChange}
        />
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          data-testid="password"
          value={formData.password}
          onChange={onChange}
        />
        <Button type="submit">Submit</Button>
        <Button>
          <a href="/">Cancel</a>
        </Button>
      </form>
    </InputWrap>
  );
};

export default LoginHooks;
