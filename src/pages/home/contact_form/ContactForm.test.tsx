import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
    it('renders without crashing', () => {
        render(<ContactForm />);
    });

    // Add more test cases here...
});
