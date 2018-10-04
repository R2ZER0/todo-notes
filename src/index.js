import '@babel/polyfill';
import 'airbnb-js-shims';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(<App/>, document.getElementById('app'));
