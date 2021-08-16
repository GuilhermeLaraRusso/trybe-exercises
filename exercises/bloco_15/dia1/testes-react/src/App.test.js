import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import React from 'react';


// Acessar os elementos da sua tela

// Interagir co eles (se houver necessidade)

// Fazer seu teste




// test('Verificando se existe o campo Email', () => {
//   const meuApp = render(<App />);
//   const linkElement = meuApp.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Verificando se existe o campo Email', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('Verificando se o botão de enviar existe', () => {
  const { getByTestId } = render(<App />);
  const btn = getByTestId('id-send');
  expect(btn).toBeInTheDocument();
  expect(btn.type).toBe('button');
  expect(btn).toHaveValue('Enviar');
})
  
test('Verificando se existem dois botões', () => {
  const { getAllByRole } = render(<App />);
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(2);
});
  
test('Verificando se o botão e o campo email estão funcionando', () => {
  const { getByTestId, getByLabelText } = render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});
