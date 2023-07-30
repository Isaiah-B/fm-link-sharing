import { useContext, useState } from 'react';

import SignupForm from '../../components/auth-forms/signup-form.component';
import AuthLayout from '../../layouts/layout-auth/layout-auth.layout';

import { AuthCredentials } from '../../types';
import { AuthContext } from '../../context/auth-context';
import handleAuthErrors from '../../utils/handleAuthErrors';

import { AuthPageContainer } from './auth.styles';

export default function SignupPage() {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState<string | undefined>();

  const handleSignup = async (event: React.FormEvent, credentials: AuthCredentials) => {
    event.preventDefault();

    const { password, passwordConfirm } = credentials;
    
    try {
      // Non-Firebase password validation
      if (password.length < 8) {
        throw new Error('Password length must be at least 8 characters.');
      }
      
      if (password !== passwordConfirm) {
        throw new Error('Passwords do not match.');
      }

      await createUser(credentials);
    } catch (err: unknown) {
      const authErr = handleAuthErrors(err);
      setError(authErr);
    }
  }

  return (
    <AuthPageContainer>
      <AuthLayout>
        <SignupForm
          handleSignup={handleSignup}
          error={error}
        />
      </AuthLayout>
    </AuthPageContainer>
  )
}