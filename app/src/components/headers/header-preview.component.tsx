import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

import { HeaderContainer, PreviewHeaderCenterButtons } from './header.styles';
import { ButtonPrimary, ButtonSecondary } from '../../index.styles';

export default function HeaderPreview({ handleShareLink }: { handleShareLink: () => void }) {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  
  return (
    <HeaderContainer>
      <PreviewHeaderCenterButtons>
        <ButtonSecondary onClick={() => navigate('/')}>
          Back to Editor
        </ButtonSecondary>
        
        {
          user.token
            ? (
              <ButtonPrimary onClick={handleShareLink}>
                Share Link
              </ButtonPrimary>
            )
            : null
        }
      </PreviewHeaderCenterButtons>
    </HeaderContainer>
  );
}