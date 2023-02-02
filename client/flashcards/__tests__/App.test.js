/**
 * @jest-environment jsdom
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../src/App';
import {BrowserRouter as Router} from 'react-router-dom';


test('renders correct content', () => {
    // render a React Component to the DOM
    const div = document.createElement('div');
    ReactDOM.render(<Router><App /></Router>, div);

});