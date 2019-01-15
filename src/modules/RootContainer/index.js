import React from "react";
import styled from "styled-components";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Home from "../Home";

const history = createHistory();
const RootContainer = props => {
  return (
    <Router history={history}>
      <Route
        render={({ location }) => {
          return (
            <Container>
              <Route exact path="/" component={Home} />
            </Container>
          );
        }}
      />
    </Router>
  );
};

export default RootContainer;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  perspective: 1200px;
`;
