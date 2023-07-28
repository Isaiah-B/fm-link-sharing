import { useState } from 'react';
import { Link } from 'react-router-dom';

import TextInput from '../text-input/text-input.component';
import { ReactComponent as EmailIcon } from '../../assets/images/icon-email.svg';
import { ReactComponent as PasswordIcon } from '../../assets/images/icon-password.svg';
import { ButtonPrimary } from '../..';

import { AuthCredentials } from '../../types';
import useValidateForm from '../../hooks/useValidateForm';

import {
  AuthFormContainer,
  AuthFormHeader,
  AuthNavigate,
  FormFields,
} from './auth-forms.styles';

export default function SignupForm(
  { handleSignup }: {
    handleSignup: (event: React.FormEvent, credentials: AuthCredentials) => void
  }
) {

  const [credentials, setCredentials] = useState<AuthCredentials>({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  
  const formRef = useValidateForm();

  return (
    <AuthFormContainer
      ref={formRef}
      onSubmit={(e) => handleSignup(e, credentials)}
    >
      <AuthFormHeader>
        <h1>Create account</h1>
        <p>Let's get you started sharing your links!</p>
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
          placeholder='At least 8 characters'
          required
        />

        <TextInput
          inputLabel='Confirm password'
          Icon={PasswordIcon}
          errorMsg='Please check again'
          value={credentials.passwordConfirm}
          onChange={({ target }) => setCredentials({ ...credentials, passwordConfirm: target.value })}
          type='password'
          placeholder='At least 8 characters'
          required
        />
      </FormFields>

      <ButtonPrimary type='submit'>Create new account</ButtonPrimary>

      <AuthNavigate>
        <p>
          Already have an account?
          &nbsp;
          <Link to="/login">Login</Link>
        </p>
      </AuthNavigate>
    </AuthFormContainer>
  );
}