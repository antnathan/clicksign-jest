import '@testing-library/dom';
import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import LoginForm from './LoginForm.vue'

const createLoginForm = (config) => render(LoginForm, config);

describe('XInput', () => {
  it('Should not emit submit when not all fields are filled', () => {
    const { emitted, getByTestId } = createLoginForm();
    const submitBtn = getByTestId('submit-button');

    userEvent.click(submitBtn);

    expected(emitted().submit).toBeFalsy();
  });

  it('Should emit submit if all fields are filled', () => {
    const { emitted, getByTestId } = createLoginForm();
    const submitBtn = getByTestId('submit-button');

    userEvent.click(submitBtn);

    expected(emitted().submit).toBeTruthy();
  });

  it('Should fill filds if props are passed', () => {
    const { getByTestId } = createLoginForm({
      props: {
        email: 'mock@gmail.com',
        password: '123456',
      },
    });

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');

    expect(emailInput).toHaveValue('mock@gmail.com');
    expect(passwordInput).toHaveValue('123456');
  })
});
