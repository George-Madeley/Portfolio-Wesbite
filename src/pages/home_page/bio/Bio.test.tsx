import React from 'react';
import { render } from '@testing-library/react';
import Bio from './Bio';

describe('Bio Component', () => {
    it('renders without crashing', () => {
        render(<Bio />);
    });

    // Add more test cases here...
});
