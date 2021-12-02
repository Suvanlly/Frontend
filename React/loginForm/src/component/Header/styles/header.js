import styled from "styled-components";

export const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #efdcfb;
  background: linear-gradient(to bottom, #dfbdfa 5%, #bc80ea 100%);
  background-color: #dfbdfa;
  border-radius: 5px;
  border: 1px solid #c584f3;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #9752cc;
  &:hover {
    background: linear-gradient(to bottom, #bc80ea 5%, #dfbdfa 100%);
    background-color: #bc80ea;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  margin: 0 auto;
  padding-top: 50px;
`;
