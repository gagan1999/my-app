import React from 'react';
import ReactDOM from 'react-dom';
 import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import  store  from './redux/store';
import App from './App'
import {fetchPosts} from './redux/action';
import ErrorBoundary from './ErrorBoundary';

store.dispatch(fetchPosts())

ReactDOM.render(
  <ErrorBoundary>
  <Provider store={store}>
    <App />
  </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
