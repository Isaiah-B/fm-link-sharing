import { ReactComponent as LogoLarge } from '../../assets/images/logo-devlinks-large.svg'; 
import { ReactComponent as LogoSmall } from '../../assets/images/logo-devlinks-small.svg';

import { AuthLayoutContainer } from './layout-auth.styles';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthLayoutContainer>
      <LogoLarge />

      {children}
    </AuthLayoutContainer>
  );
}