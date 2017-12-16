/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import Root from './components/Root';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// pull in the ag-grid styles we're interested in
import "../node_modules/ag-grid/dist/styles/ag-grid.css";
import "../node_modules/ag-grid/dist/styles/theme-fresh.css";

const store = configureStore();

render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('app')
);


store.dispatch({type: '_INITIALIZE_STATE'});

setInterval(() => store.dispatch({type: '_INITIALIZE_STATE'}), 60000);
