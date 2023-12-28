import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../../../components/heading/Heading';



describe("Hero", () => {

    it('renders without crashing', () => {
        render(<Hero />);
    });


    test("Check for Portfolio in Title", () => {
        const expectedValue = "The Portfolio of";
        render(<Hero />);
        const titleElement = screen.getByText(expectedValue);
        expect(titleElement).toBeInTheDocument();
    });

    test("Check for Name in Title", () => {
        const expectedValue = "George Madeley";
        render(<Hero />);
        const titleElement = screen.getByText(expectedValue);
        expect(titleElement).toBeInTheDocument();
    });
})