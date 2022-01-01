import React, { useState } from "react";
import axios from "axios";
import { Input, InputWrap, Button, Label } from "./styles/login";
import { Link } from "react-router-dom";

const LoginHooks = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const { username, password } = formData;

  const changeInputHandler = (e) => {
    // console.log(e.target.name);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (event) => {
    // event.preventDeafault(): prevent submiting the form until formValue assigned
    event.preventDefault();
    const newData = {
      username: formData.username,
      password: formData.password,
    };
    axios
      .post(
        "https://loginform-fd027-default-rtdb.firebaseio.com/data.json",
        newData
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
          name="username"
          // whenever user type something inside input box, onChange event will be executed
          onChange={changeInputHandler}
        />
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          data-testid="password"
          value={formData.password}
          name="password"
          onChange={changeInputHandler}
        />
        <Button type="submit">Submit</Button>
        <Button>
          <Link to="/">Cancel</Link>
        </Button>
      </form>
    </InputWrap>
  );
};

export default LoginHooks;
