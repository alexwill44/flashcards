import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from "./App";

test('testing', () =>{
    // render a React Component to the DOM
    const root = document.createElement('div');
    ReactDOM.render(<App />, root);

    // USe DOP APIs (querySelector) to make assertions
    expect(root.querySelector('button.back').textContent).tobe('Take me HOME');
});