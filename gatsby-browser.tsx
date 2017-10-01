import * as React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./src/store";

exports.replaceRouterComponent = ({ history }) =>
  ({ children }) =>
    <Provider store={store} >
      <Router history={history}>{children}</Router>
    </Provider>;
