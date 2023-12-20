import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from './Nav';

describe("Check for navigation options", () => {
    const expectedValues =["Home", "Projects", "Employment", "Education", "Contact"];

    expectedValues.forEach(expectedValue => {
        test(`Check for '${expectedValue}' option`, () => {
            render(<Nav />);
            const titleElement = screen.getByText(expectedValue);
            expect(titleElement).toBeInTheDocument();
        });
    })
})