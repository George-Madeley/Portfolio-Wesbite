import React from 'react';
import { render } from '@testing-library/react';
import ProjectsPage from './ProjectsPage';

describe('Projects Component', () => {
    it('renders without crashing', () => {
        render(<ProjectsPage />);
    });
});
