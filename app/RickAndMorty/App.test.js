import { render, screen } from '@testing-library/react';
import RickMort from './components/RickAndMorty/RickAndMorty';

test('renders learn react link', () => {
  render(<RickMort />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
