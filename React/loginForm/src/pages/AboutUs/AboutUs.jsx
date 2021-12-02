import React, { Component } from "react";
import Header from "../../component/Header/Header";
import { Background, Title } from "../HomePage/styles/HomePage";

class AboutUs extends Component {
  render() {
    return (
      <Background>
        <Header />
        <Title>This is About us</Title>
      </Background>
    );
  }
}

export default AboutUs;
