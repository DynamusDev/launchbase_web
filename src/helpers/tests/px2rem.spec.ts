import { render, screen } from '@testing-library/react';
import { px2rem } from '../px2rem';

describe('Home screen', () => {
  it('Transform px in rem', () => {
    expect(px2rem(16)).toBe('1rem');
    expect(px2rem(32)).toBe('2rem');
  });
});
