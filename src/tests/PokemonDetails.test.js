import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa componente PokemonDetails', () => {
  const linkName = 'More details';
  test('Contém informações do pokémon selecionado', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', {
      name: linkName,
    });
    userEvent.click(detailsLink);

    const detailsText = screen.getByText('Pikachu Details');
    expect(detailsText).toBeInTheDocument();
    expect(detailsLink).not.toBeInTheDocument();

    const summary = screen.getByRole('heading', {
      level: 2,
      name: 'Summary',
    });
    expect(summary).toBeInTheDocument();

    const description = screen.getByText(/This intelligent/i);
    expect(description).toBeInTheDocument();
  });

  test('Contém uma seção com mapas', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', {
      name: linkName,
    });
    userEvent.click(detailsLink);

    const locationsText = screen.getByText('Game Locations of Pikachu');
    expect(locationsText).toBeInTheDocument();

    const locations = screen.getAllByAltText('Pikachu location');
    expect(locations).toHaveLength(2);

    const { src: src1 } = locations[0];
    expect(src1).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    const location1Text = screen.getByText('Kanto Viridian Forest');
    expect(location1Text).toBeInTheDocument();

    const { src: src2 } = locations[1];
    expect(src2).toBe('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    const location2Text = screen.getByText('Kanto Power Plant');
    expect(location2Text).toBeInTheDocument();
  });

  test('Pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', {
      name: linkName,
    });
    userEvent.click(detailsLink);

    const favoriteCheckbox = screen.getByRole('checkbox');
    const checkboxLabel = screen.getByText('Pokémon favoritado?');
    expect(checkboxLabel).toBeInTheDocument();

    userEvent.click(favoriteCheckbox);

    const favoritesLink = screen.getByRole('link', {
      name: 'Favorite Pokémons',
    });

    userEvent.click(favoritesLink);

    const favoritePokemon = screen.getByText('Pikachu');
    expect(favoritePokemon).toBeInTheDocument();
  });
});
