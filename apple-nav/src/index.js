import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    // wrap App in Router to be able to use routing components
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);