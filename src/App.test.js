import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/my page/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders react logo', () => {
  render(<App />);
  const linkElement = screen.getByRole('img');
  expect(linkElement).toBeInTheDocument();
});
