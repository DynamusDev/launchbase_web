import { render, fireEvent, screen } from '@testing-library/react';
import Home from '../index';
import { getByTextContent } from '../../tests/testMatch';

const pushMock = jest.fn();

describe('Home screen', () => {
  it('renders home page', () => {
    render(<Home />);

    expect(getByTextContent('Welcome to Next.js!')).toBeInTheDocument();
    expect(
      getByTextContent('Get started by editing pages/index.js')
    ).toBeInTheDocument();
    expect(screen.getByText('Documentation →')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Find in-depth information about Next.js features and API.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Learn →')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Learn about Next.js in an interactive course with quizzes!'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Examples →')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Discover and deploy boilerplate example Next.js projects.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Deploy →')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Instantly deploy your Next.js site to a public URL with Vercel.'
      )
    ).toBeInTheDocument();
  });
});
