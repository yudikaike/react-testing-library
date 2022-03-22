import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente FavoritePokemons', () => {
  test('Exibe na tela a mensagem "No favorite pokemon found"', () => {
    const { history } = renderWithRouter(<App />);

    const favoriteLink = screen.getByRole('link', {
      name: 'Favorite Pokémons',
    });

    userEvent.click(favoriteLink);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/favorites');

    const noFavoritePokemons = screen.getByText('No favorite pokemon found');
    expect(noFavoritePokemons).toBeInTheDocument();
  });
});
