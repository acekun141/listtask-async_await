import ReactDOM from 'react-dom';
import React from 'react';
import App from './component/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/App.scss';
import { Provider } from 'react-redux';
import store from './redux/store';

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));