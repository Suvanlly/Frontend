import React, { Component } from "react";
import Header from "../../component/Header/Header";

import { Background, Title } from "./styles/HomePage";

class HomePage extends Component {
  render() {
    return (
      <Background>
        <Header />
        <Title>This is Home page</Title>
      </Background>
    );
  }
}

export default HomePage;
