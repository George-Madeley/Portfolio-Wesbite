import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

describe("Check for Title", () => {
    test("Check for Portfolio in Title", () => {
        const expectedValue = "The Portfolio of";
        render(<Home />);
        const titleElement = screen.getByText(expectedValue);
        expect(titleElement).toBeInTheDocument();
    });

    test("Check for Name in Title", () => {
        const expectedValue = "George Madeley";
        render(<Home />);
        const titleElement = screen.getByText(expectedValue);
        expect(titleElement).toBeInTheDocument();
    });

    
})