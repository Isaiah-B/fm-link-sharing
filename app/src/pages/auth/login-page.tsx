import { useContext, useState } from 'react';

import LoginForm from '../../components/auth-forms/login-form.component';
import AuthLayout from '../../layouts/layout-auth/layout-auth.layout';

import { AuthCredentials } from '../../types';
import { AuthContext } from '../../context/auth-context';
import handleAuthErrors from '../../utils/handleAuthErrors';

import { AuthPageContainer } from './auth.styles';

export default function LoginPage() {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState<string | undefined>();

  const handleLogin = async (event: React.FormEvent, credentials: AuthCredentials) => {
    event.preventDefault();

    try {
      await loginUser(credentials);
    } catch (err: unknown) {
      const authError = handleAuthErrors(err);
      setError(authError);
    }
  }

  return (
    <AuthPageContainer>
      <AuthLayout>
        <LoginForm
          handleLogin={handleLogin}
          error={error}
        />
      </AuthLayout>
    </AuthPageContainer>
  )
}