import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`;

ReactDOM.render(
  <>
    <MainWrapper>
      <GlobalStyles />
      <Routes />
    </MainWrapper>
  </>,
  document.getElementById("root")
);
