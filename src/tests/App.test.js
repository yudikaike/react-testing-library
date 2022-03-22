import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente App', () => {
  test('Verifica se o link possui o texto "Home" e leva ao endereço "/"', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', {
      name: 'Home',
    });
    expect(homeLink).toBeInTheDocument();

    userEvent.click(homeLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  test('Verifica se o link possui o texto "About" e leva ao endereço "/about"', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', {
      name: 'About',
    });
    expect(aboutLink).toBeInTheDocument();

    userEvent.click(aboutLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });
});
