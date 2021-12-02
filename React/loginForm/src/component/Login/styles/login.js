import styled from "styled-components";

export const InputWrap = styled.div`
  width: fit-content;
  margin: 150px auto;
`;
export const Label = styled.label`
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  color: #001f3f;
`;
export const Input = styled.input`
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 300px;
  margin-bottom: 40px;
  border-radius: 5px;
  border: 1px solid #dfbdfa;
`;
export const Message = styled.p`
  color: red;
`;
export const Button = styled.button`
  margin: 10px 25px;
  box-shadow: inset 0px 1px 0px 0px #dcecfb;
  background: linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%);
  background-color: #bddbfa;
  border-radius: 6px;
  border: 1px solid #84bbf3;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528ecc;
  &:hover {
    background: linear-gradient(to bottom, #80b5ea 5%, #bddbfa 100%);
    background-color: #80b5ea;
  }
`;
