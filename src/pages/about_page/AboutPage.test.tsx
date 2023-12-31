import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('About component', () => {
    it('renders without crashing', () => {
        render(<AboutPage />);
    });

    // Add more test cases here
});
