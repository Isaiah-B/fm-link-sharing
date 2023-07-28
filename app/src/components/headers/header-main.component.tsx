import { useRecoilState } from "recoil";

import { ReactComponent as LogoLarge } from '../../assets/images/logo-devlinks-large.svg';
import { ReactComponent as LinkIcon } from '../../assets/images/icon-link.svg';
import { ReactComponent as ProfileDetailsIcon } from '../../assets/images/icon-profile-details-header.svg';
import { ButtonSecondary } from "../..";

import { PageState } from "../../recoil/store";

import { HeaderContainer, HeaderNav, HeaderTab, PreviewLink } from "./header.styles";

export default function HeaderMain() {
  const [pageState, setPageState] = useRecoilState(PageState);
  
  return (
    <HeaderContainer>
      <LogoLarge />
      <HeaderNav>
        <HeaderTab
          className={pageState === 'links' ? 'selected' : ''}
          onClick={() => setPageState('links')}
        >
          <LinkIcon />
          Links
        </HeaderTab>

        <HeaderTab
          className={pageState === 'profile' ? 'selected' : ''}
          onClick={() => setPageState('profile')}
        >
          <ProfileDetailsIcon />
          Profile Details
        </HeaderTab>
      </HeaderNav>

      <PreviewLink to={'/preview'}>
        <ButtonSecondary>
          Preview
        </ButtonSecondary>
      </PreviewLink>
    </HeaderContainer>
  )
}