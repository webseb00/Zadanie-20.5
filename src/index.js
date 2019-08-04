import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/index';
import routes from './routes';
import './country.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
       <Router history={hashHistory} routes={routes} />
    </Provider>,
    rootElement
);

