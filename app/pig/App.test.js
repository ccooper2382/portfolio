import { render, screen } from '@testing-library/react';
import Pig from './page';

test('renders learn react link', () => {
  render(<Pig />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
