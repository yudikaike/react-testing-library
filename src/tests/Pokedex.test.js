import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente Pokedex', () => {
  test('Contém um heading com o texto "Encountered pokémons"', () => {
    renderWithRouter(<App />);

    const heading = screen.getByText('Encountered pokémons');

    expect(heading).toBeInTheDocument();
  });

  test('É exibido o próximo pokémon quando se é clicado no botão', () => {
    renderWithRouter(<App />);

    const pikachu = screen.getByText('Pikachu');
    const nextPokemonBtn = screen.getByRole('button', {
      name: 'Próximo pokémon',
    });

    expect(pikachu).toBeInTheDocument();
    expect(nextPokemonBtn).toBeInTheDocument();

    userEvent.click(nextPokemonBtn);

    const charmander = screen.getByText('Charmander');
    expect(charmander).toBeInTheDocument();

    const clickTimes = 8;
    for (let index = 0; index < clickTimes; index += 1) {
      userEvent.click(nextPokemonBtn);
    }

    expect(screen.getByText('Pikachu')).toBeInTheDocument();
  });
});
