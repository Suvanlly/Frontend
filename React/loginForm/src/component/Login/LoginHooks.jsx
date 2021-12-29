import React, { useState } from "react";
import axios from "axios";
import { Input, InputWrap, Button, Label } from "./styles/login";

const LoginHooks = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  submitHandler = (event) => {
    // event.preventDeafault(): prevent submiting the form until formValue assigned
    event.preventDefault();
    const formValue = {
      // 这里的username和password都已经更新过了吗？是用户输入的最新的值吗？
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post(
        "https://loginform-fd027-default-rtdb.firebaseio.com/data.json",
        formValue
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
      <form data-testid="login-form" onSubmit={this.submitHandler}>
        <Label htmlFor="username">Username:</Label>
        <Input
          type="text"
          id="username"
          data-testid="username"
          // make input username value appear on the input box
          value={username}
          // whenever user type something inside input box, onChange event will be executed
          onChange={onChange}
        />
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          data-testid="password"
          value={password}
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
