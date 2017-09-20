// @flow
import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import createHistory from "history/createBrowserHistory";

import { ConnectedRouter, routerMiddleware } from "react-router-redux";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

import reducers from "./reducers";

import App from "./components/App";

import registerServiceWorker from "./registerServiceWorker";
import "./style/index.css";

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(reducers, applyMiddleware(middleware));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
