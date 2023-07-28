import { useContext } from 'react';

import SignupForm from '../../components/auth-forms/signup-form.component';
import AuthLayout from '../../layouts/layout-auth/layout-auth.layout';

import { AuthCredentials } from '../../types';
import { AuthContext } from '../../context/auth-context';
import handleAuthErrors from '../../utils/handleAuthErrors';

import { AuthPageContainer } from './auth.styles';

export default function SignupPage() {
  const { createUser } = useContext(AuthContext);

  const handleSignup = async (event: React.FormEvent, credentials: AuthCredentials) => {
    event.preventDefault();

    const { password } = credentials;

    try {
      if (password.length < 8) {
        throw new Error('Password length must be at least 8 characters.');
      }
      
      await createUser(credentials);
    } catch (err: unknown) {
      handleAuthErrors(err);
    }
  }

  return (
    <AuthPageContainer>
      <AuthLayout>
        <SignupForm handleSignup={handleSignup} />
      </AuthLayout>
    </AuthPageContainer>
  )
}