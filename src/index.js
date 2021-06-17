import React from "react";
import ReactDOM from "react-dom";
import WithRouterApp from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.scss";
import App from "./App";

import { ThemeContextProvider } from "./context/themeContext";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <ThemeContextProvider>
    <Router>
      <WithRouterApp />
    </Router>
  </ThemeContextProvider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
