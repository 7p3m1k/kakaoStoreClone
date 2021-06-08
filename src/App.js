import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./Reset.css";

const Wrapper = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Nav />
    </Wrapper>
  );
}

export default App;
