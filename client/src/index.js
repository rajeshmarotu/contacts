import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore.js';


const initialState = window.___INTITIAL_STATE__;
var store  = configureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<App /> 
	</Provider>
	, document.getElementById('root'));


serviceWorker.unregister();
