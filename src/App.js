// @flow

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Prismic from "prismic-javascript";
import { injectGlobal, ThemeProvider } from "styled-components";
import { globalStyles } from "Styles/global";
import { theme } from "Styles/themes";

import Homepage from "Views/Homepage";
import Project from "Views/Project";

const theme2 = {
  test: "red"
};

injectGlobal`
	${globalStyles}

	html{
		background: ${(props) => props.theme2.test};
	}
`;

const apiEndpoint = "https://pussypedia.prismic.io/api/v2";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          {/* <Navigation /> */}
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/:project" exact component={Project} />

            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
