// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GptNova title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GptNova/i);
    expect(titleElement).toBeInTheDocument();
});
