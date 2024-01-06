import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../../../components/heading/Heading';



describe("Hero", () => {

    it('renders without crashing', () => {
        render(<Hero />);
    });
})