import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { ReactComponent as LogoLarge } from '../../assets/images/logo-devlinks-large.svg'; 
import { ReactComponent as LogoSmall } from '../../assets/images/logo-devlinks-small.svg';

import { AuthContext } from '../../context/auth-context';

import { AuthLayoutContainer } from './layout-auth.styles';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { user } = useContext(AuthContext);

  if (user.token) {
    return <Navigate to={'/'} replace />
  }

  return (
    <AuthLayoutContainer>
      <LogoLarge />

      {children}
    </AuthLayoutContainer>
  );
}