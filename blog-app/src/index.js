/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

// import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const Hello = () => <div>Hello!</div>;

const Goodbye = () => <div>Goodbye!</div>;

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        Header
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={Goodbye} />
        Footer
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'),
);
