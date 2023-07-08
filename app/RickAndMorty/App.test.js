import { render, screen } from '@testing-library/react';
import RickMort from './page';

test('renders learn react link', () => {
  render(<RickMort />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
