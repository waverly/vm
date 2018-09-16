// @flow

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Prismic from "prismic-javascript";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import { globalStyles } from "Styles/global";
import { theme } from "Styles/themes";

import Homepage from "Views/Homepage";
import Project from "Views/Project";

const apiEndpoint = "https://pussypedia.prismic.io/api/v2";

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
    const { match, location, history } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Wrapper loaded={this.state.loaded}>
          <TransitionGroup>
            <CSSTransition key={location} timeout={300} classNames="fade">
              <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/:project" exact component={Project} />
                {/* <Route component={NotFound} /> */}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
