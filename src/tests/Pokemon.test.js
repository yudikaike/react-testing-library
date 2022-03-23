import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente Pokemon', () => {
  test('Contém as informações corretas sobre o pokémon', () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName.textContent).toBe('Pikachu');

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType.textContent).toBe('Electric');

    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonWeight.textContent).toBe('Average weight: 6.0 kg');

    const { src } = screen.getByAltText('Pikachu sprite');
    expect(src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('Contém um link que direciona aos detalhes do pokémon', () => {
    const { history } = renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', {
      name: 'More details',
    });
    userEvent.click(detailsLink);

    const { location: { pathname } } = history;

    expect(pathname).toBe('/pokemons/25');
  });

  test('Contém uma estrela nos pokémons favoritos', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', {
      name: 'More details',
    });
    userEvent.click(detailsLink);

    const favoriteCheckbox = screen.getByRole('checkbox');
    userEvent.click(favoriteCheckbox);

    const { src } = screen.getByAltText('Pikachu is marked as favorite');
    expect(src).toBe('http://localhost/star-icon.svg');
  });
});
