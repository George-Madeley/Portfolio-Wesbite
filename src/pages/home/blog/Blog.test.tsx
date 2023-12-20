import React from 'react';
import { render } from '@testing-library/react';
import Blog from './Blog';

describe('Blog', () => {
    it('renders without crashing', () => {
        render(<Blog />);
    });

    // Add more test cases here...
});
