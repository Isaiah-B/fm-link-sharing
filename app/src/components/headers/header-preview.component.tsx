import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';

import { HeaderContainer, HeaderLink } from './header.styles';
import { ButtonPrimary, ButtonSecondary } from '../..';

export default function HeaderPreview({ handleShareLink }: { handleShareLink: () => void }) {
  const { user } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <HeaderLink to={'/'}>
        <ButtonSecondary>
          Back to Editor
        </ButtonSecondary>
      </HeaderLink>
      
      {
        user.token
          ? (
            <ButtonPrimary onClick={handleShareLink}>
              Share Link
            </ButtonPrimary>
          )
          : null
      }
    </HeaderContainer>
  );
}