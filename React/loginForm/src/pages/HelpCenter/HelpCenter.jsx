import React, { Component } from "react";
import Header from "../../component/Header/Header";
import { Background, Title } from "../HomePage/styles/HomePage";

class HelpCenter extends Component {
  render() {
    return (
      <Background>
        <Header />
        <Title>This is Help Center</Title>
      </Background>
    );
  }
}

export default HelpCenter;
