import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Authentification from './Authentification';

describe('<Authentification />', () => {
  test('it should mount', () => {
    render(<Authentification />);
    
    const authentification = screen.getByTestId('Authentification');

    expect(authentification).toBeInTheDocument();
  });
});