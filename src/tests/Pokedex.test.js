import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente Pokedex', () => {
  test('Contém um heading com o texto "Encountered pokémons"', () => {
    renderWithRouter(<App />);

    const heading = screen.getByText('Encountered pokémons');

    expect(heading).toBeInTheDocument();
  });
});
