import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../components/About';

describe('Testa o componente About', () => {
  test('Contém um heading com o texto "About Pokédex"', () => {
    renderWithRouter(<About />);

    const header = screen.getByRole('heading', {
      level: 2,
      name: 'About Pokédex',
    });

    expect(header).toBeInTheDocument();
  });
});
