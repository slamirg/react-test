import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Redux get news', () => {
    it('Redux test 1', () => {
        expect(true).toBeTruthy();
    });

    it('Redux test 2', () => {
        expect(true).toBeTruthy();
    });
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
