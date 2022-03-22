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

  test('Contém dois parágrafos com textos sobre a pokédex"', () => {
    renderWithRouter(<About />);

    const paragraph1 = screen.getByText(/This/i);
    const paragraph2 = screen.getByText(/One/i);

    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });

  test('Contém uma imagem da pokédex"', () => {
    renderWithRouter(<About />);

    const { src } = screen.getByRole('img');

    expect(src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
