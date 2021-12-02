import React, { Component } from "react";
import axios from "axios";
import { Input, InputWrap, Message, Button, Label } from "./styles/login";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.usernameInputHandler = this.usernameInputHandler.bind(this);
    this.passwordInputHandler = this.passwordInputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  usernameInputHandler(e) {
    // goal: username inputbox will show the input value from user
    // how: replace this.state.username by e.target.value
    const inputUsername = e.target.value;
    // console.log(e.target.value);
    this.setState({
      username: inputUsername,
    });
  }

  passwordInputHandler(e) {
    const inputPassword = e.target.value;
    this.setState({
      password: inputPassword,
    });

    // setInterval
  }

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
        "https://phtest-a5012-default-rtdb.firebaseio.com/data.json",
        formValue
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <InputWrap>
        <form data-testid="login-form" onSubmit={this.props.submitHandler}>
          <Label htmlFor="username">Username:</Label>
          <Input
            type="text"
            id="username"
            data-testid="username"
            // make input username value appear on the input box
            value={this.state.username}
            // whenever user type something inside input box, onChange event will be executed
            onChange={this.usernameInputHandler}
          />
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            data-testid="password"
            value={this.state.password}
            onChange={this.passwordInputHandler}
          />
          <Button type="submit">Submit</Button>
          <Link to="/">
            <Button>Cancel</Button>
          </Link>
        </form>
      </InputWrap>
    );
  }
}

export default Login;
