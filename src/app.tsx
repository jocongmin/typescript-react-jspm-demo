// lib imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Hello from "./containers/mytest";
import MyBodyData from "./containers/my-body-data";
import MySteps from "./containers/my-steps";

import { store } from './store';
const history = syncHistoryWithStore(hashHistory, store) as any;

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route component={MyBodyData}>
          <Route path="/" component={MyBodyData}/>
          <Route path="/test" component={Hello}/>
        </Route>
        <Route path="/bodydata" component={MyBodyData}/>
        <Route path="/steps" component={MySteps}/>
      </Router>
    </Provider>
  );
}

export const app = ReactDOM.render(
  <App />, document.getElementById('app')
);
