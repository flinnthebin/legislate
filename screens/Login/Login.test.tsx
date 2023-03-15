import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './login';

describe('Login', () => {
  it('displays the login button', () => {
    const { getByText } = render(<Login />);
    const button = getByText('Login with Google');
    expect(button).toBeInTheDocument();
  });

  it('calls onSuccess when the user logs in successfully', () => {
    const onSuccess = jest.fn();
    const { getByText } = render(<Login onSuccess={onSuccess} />);
    const button = getByText('Login with Google');
    fireEvent.click(button);
    expect(onSuccess).toHaveBeenCalled();
  });

  it('calls onFailure when the user fails to log in', () => {
    const onFailure = jest.fn();
    const { getByText } = render(<Login onFailure={onFailure} />);
    const button = getByText('Login with Google');
    fireEvent.click(button);
    expect(onFailure).toHaveBeenCalled();
  });
});
