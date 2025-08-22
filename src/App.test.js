import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero content and action buttons', () => {
  render(<App />);
  // Hero greeting
  expect(screen.getByText(/Hello!/i)).toBeInTheDocument();
  // Subtitle
  expect(screen.getByText(/Full Stack Developer/i)).toBeInTheDocument();
  // Action buttons
  expect(screen.getAllByText(/Projects/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Contact me/i)).toBeInTheDocument();
});
