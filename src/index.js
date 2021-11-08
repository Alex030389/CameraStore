import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.scss';
import App from './components/App';
import store from "./redux/redux-store";
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);