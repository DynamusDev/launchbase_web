import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Header conmponent', () => {
  it('renders with Hello World title', () => {
    render(<Header />);

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders with a custom title', () => {
    render(<Header title={'Código Preto'} />);

    expect(screen.getByText('Código Preto')).toBeInTheDocument();
  });
});
