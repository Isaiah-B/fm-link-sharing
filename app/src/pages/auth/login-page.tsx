import { useContext } from 'react';

import LoginForm from '../../components/auth-forms/login-form.component';
import AuthLayout from '../../layouts/layout-auth/layout-auth.layout';

import { AuthCredentials } from '../../types';
import { AuthContext } from '../../context/auth-context';

import { AuthPageContainer } from './auth.styles';

export default function LoginPage() {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = async (event: React.FormEvent, credentials: AuthCredentials) => {
    event.preventDefault();

    await loginUser(credentials);
  }

  return (
    <AuthPageContainer>
      <AuthLayout>
        <LoginForm handleLogin={handleLogin} />
      </AuthLayout>
    </AuthPageContainer>
  )
}