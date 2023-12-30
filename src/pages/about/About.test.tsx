import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

describe('About component', () => {
    it('renders without crashing', () => {
        render(<About />);
    });

    // Add more test cases here
});
