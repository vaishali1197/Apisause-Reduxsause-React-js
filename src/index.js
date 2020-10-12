import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Employee from './component/employeeView/employee'
import configStore from './redux/configStore'
import {Provider} from 'react-redux'
const store = configStore();

ReactDOM.render(
  <Provider store={store}><Employee/></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
