import { render, screen } from '@testing-library/react';
import App from './App';

test('renders view pipeline source link', () => {
  render(<App />);
  const linkElement = screen.getByText(/view pipeline source/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders devops ship with confidence title', () => {
  render(<App />);
  const titleElement = screen.getByText(/devops/i);
  expect(titleElement).toBeInTheDocument();
});
