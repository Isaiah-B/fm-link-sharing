import { HeaderContainer, PreviewLink } from './header.styles';
import { ButtonPrimary, ButtonSecondary } from '../..';

export default function HeaderPreview() {
  return (
    <HeaderContainer>
      <PreviewLink to={'/'}>
        <ButtonSecondary>
          Back to Editor
        </ButtonSecondary>
      </PreviewLink>

      <ButtonPrimary>
        Share Link
      </ButtonPrimary>
    </HeaderContainer>
  );
}