import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const Root = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};

render(<Root />, document.querySelector("#root"));
registerServiceWorker();
