import React from 'react';
import { render } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('Contact Component', () => {
    it('renders without crashing', () => {
        render(<ContactPage />);
    });

    // Add more tests here...
});
