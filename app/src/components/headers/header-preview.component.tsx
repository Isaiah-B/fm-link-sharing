import { HeaderContainer, PreviewLink } from './header.styles';
import { ButtonPrimary, ButtonSecondary } from '../..';

export default function HeaderPreview({ handleShareLink }: { handleShareLink: () => void }) {
  return (
    <HeaderContainer>
      <PreviewLink to={'/'}>
        <ButtonSecondary>
          Back to Editor
        </ButtonSecondary>
      </PreviewLink>

      <ButtonPrimary onClick={handleShareLink}>
        Share Link
      </ButtonPrimary>
    </HeaderContainer>
  );
}