import React, { Component } from "react";
import Header from "../../component/Header/Header";
import LoginHooks from "../../component/Login/LoginHooks";
import { Background } from "../HomePage/styles/HomePage";

class LoginPage extends Component {
  render() {
    return (
      <Background>
        <Header />
        <LoginHooks />
      </Background>
    );
  }
}

export default LoginPage;
