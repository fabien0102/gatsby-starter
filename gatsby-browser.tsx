import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./src/store";

exports.replaceRouterComponent = ({ history }: any) =>
  ({ children }) =>
    <Provider store={store} >
      <Router history={history}>{children} </Router>
    </Provider>;
