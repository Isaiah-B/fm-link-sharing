import { useState } from 'react';
import { Link } from 'react-router-dom';

import TextInput from '../text-input/text-input.component';
import { ReactComponent as EmailIcon } from '../../assets/images/icon-email.svg';
import { ReactComponent as PasswordIcon } from '../../assets/images/icon-password.svg';
import { ButtonPrimary } from '../..';

import useValidateForm from '../../hooks/useValidateForm';
import { AuthCredentials } from '../../types';

import {
  AuthFormContainer,
  AuthFormHeader,
  AuthNavigate,
  FormFields,
} from './auth-forms.styles';

export default function LoginForm(
  { handleLogin }: {
    handleLogin: (e: React.FormEvent, credentials: AuthCredentials) => void
  }) {
  const [credentials, setCredentials] = useState<AuthCredentials>({
    email: '',
    password: '',
  });

  const formRef = useValidateForm();

  return (
    <AuthFormContainer
      ref={formRef}
      onSubmit={(event) => handleLogin(event, credentials)}
    >
      <AuthFormHeader>
        <h1>Login</h1>
        <p>Add your details below to get back into the app</p>
      </AuthFormHeader>

      <FormFields>
        <TextInput
          inputLabel='Email address'
          Icon={EmailIcon}
          errorMsg='Please check again'
          value={credentials.email}
          onChange={({ target }) => setCredentials({ ...credentials, email: target.value })}
          type='email'
          placeholder='e.g. alex@email.com'
          required
        />

        <TextInput
          inputLabel='Password'
          Icon={PasswordIcon}
          errorMsg='Please check again'
          value={credentials.password}
          onChange={({ target }) => setCredentials({ ...credentials, password: target.value })}
          type='password'
          placeholder='Enter your password'
          required
        />
      </FormFields>

      <ButtonPrimary type='submit'>Login</ButtonPrimary>

      <AuthNavigate>
        <p>
          Don't have an account?
          &nbsp;
          <Link to="/signup">Create account</Link>
        </p>
      </AuthNavigate>
    </AuthFormContainer>
  );
}