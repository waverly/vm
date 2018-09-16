// @flow

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import ReactCSSTransitionReplace from "react-css-transition-replace";
import Prismic from "prismic-javascript";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import { globalStyles } from "Styles/global";
import { theme } from "Styles/themes";

import Homepage from "Views/Homepage";
import Project from "Views/Project";

const Wrapper = styled.div`
  opacity: ${props => (props.loaded ? 1 : 0)};
  transition: 2s opacity;
`;
injectGlobal`
  ${globalStyles}
`;

class App extends Component {
  state = {
    loaded: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 500);
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper loaded={this.state.loaded}>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/:project" exact component={Project} />
            {/* <Route component={NotFound} /> */}
          </Switch>
          {/* <Route
            render={({ location }) => (
              <ReactCSSTransitionReplace
                transitionName="fade"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
              >
                <div key={location.pathname}>
                  <Switch location={location}>
                    <Switch>
                      <Route path="/" exact component={Homepage} />
                      <Route path="/:project" exact component={Project} />
                    </Switch>
                  </Switch>
                </div>
              </ReactCSSTransitionReplace>
            )}
          /> */}
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
