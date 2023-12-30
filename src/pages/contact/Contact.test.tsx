import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Component', () => {
    it('renders without crashing', () => {
        render(<Contact />);
    });

    // Add more tests here...
});
