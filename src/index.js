import React from 'react';
import ReactDOM from 'react-dom';
import './mystyle.css';

import { Home } from './Home';
import FormClass from './class-4'
import App from './App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

let myStore = createStore(reducer);

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);