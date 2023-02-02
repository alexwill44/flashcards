/**
 * @jest-environment jsdom
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from '../src/components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders correct content', () => {
    // render a React Component to the DOM
    const root = document.createElement('div');
    ReactDOM.render(<Router><Header /></Router>, root);
    // Ue DOM APIs (querySelector) to make assertions
    expect(root.querySelector('button.back').textContent).toBe('Take me HOME');
});