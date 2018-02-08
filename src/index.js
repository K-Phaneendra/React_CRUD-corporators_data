import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'babel-polyfill';
import {createStore} from 'redux';
import allReducers from './reducers/allReducers';
import {Provider} from 'react-redux';

const store = createStore(allReducers);

console.log(store.getState());
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
