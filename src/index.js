import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import DisplayMovies from './Landing/components/DisplayMovies';
import { legacy_createStore as createStore } from 'redux';
import reducer from './Landing/reducers';
import { Provider } from 'react-redux';
import UserLanding from './Landing/components/Landing';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appStore = createStore(reducer)
root.render(
  <>
    <Provider store={appStore}>
      <UserLanding />
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
