import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, InputWrap, Button, Label, LogoutText } from "./styles/login";
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
      // This allows username and password inputbox changes respectively whenever user type something based on the name of the inputbox
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
        setIsLoggedIn(true);
      })
      .catch(function (error) {
        console.log(error);
        setIsLoggedIn(false);
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      let timer = setTimeout(() => {
        // console.log("user logged out!");
        setFormData({ username: "", password: "" });
        setIsLoggedIn(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isLoggedIn]);

  return (
    <>
      <InputWrap>
        <form data-testid="login-form" onSubmit={submitHandler}>
          <Label htmlFor="username">Username:</Label>
          <Input
            type="text"
            id="username"
            data-testid="username"
            // make input username value appear on the input box
            value={formData.username}
            // name of the input allows e.target.name know which inputbox it is when user make changes
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
          <Button data-testid="button" type="submit">
            Submit
          </Button>
          <Button>
            <a href="/">Cancel</a>
          </Button>
        </form>
      </InputWrap>
      {isLoggedIn && <LogoutText>Current Status: Logged in</LogoutText>}
      {!isLoggedIn && <LogoutText>Current Status: Logout</LogoutText>}
    </>
  );
};

export default LoginHooks;
