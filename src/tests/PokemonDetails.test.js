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
});
