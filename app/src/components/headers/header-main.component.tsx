import { useContext, useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import InstructionOverlay from "../instruction-overlay/instruction-overlay.component";

import { ReactComponent as LogoLarge } from '../../assets/images/logo-devlinks-large.svg';
import { ReactComponent as LogoSmall } from '../../assets/images/logo-devlinks-small.svg';
import { ReactComponent as LinkIcon } from '../../assets/images/icon-link.svg';
import { ReactComponent as ProfileDetailsIcon } from '../../assets/images/icon-profile-details-header.svg';
import { ReactComponent as VerticalEllipsis } from '../../assets/images/icon-vertical-ellipsis.svg';
import { ReactComponent as PreviewMobileIcon } from '../../assets/images/icon-preview-header.svg';

import useScreenWidth from "../../hooks/useScreenWidth";
import useClickOutside from "../../hooks/useClickOutside";

import { PageState } from "../../recoil/store";
import { AuthContext } from "../../context/auth-context";

import {
  HeaderAuthButton,
  HeaderContainer,
  HeaderLogoWrapper,
  HeaderMenu,
  HeaderMenuButton,
  HeaderNav,
  HeaderPreviewButton,
  HeaderRight,
  HeaderTab,
} from "./header.styles";

const cookies = new Cookies;

export default function HeaderMain() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [pageState, setPageState] = useRecoilState(PageState);
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const screenWidth = useScreenWidth();
  const clickOutsideRef = useClickOutside(() => setMenuOpen(false));

  const tutorialOpen = cookies.get('tutorial') === '0' ? true : false;

  const logoutUser = () => {
    cookies.remove('token');
    cookies.remove('id');
    setUser({ id: '', token: null, isAnon: true })
    
    navigate('/login');
  };

  const onClickHeaderMenu = () => {
    setMenuOpen(!menuOpen);

    if (tutorialOpen) {
      cookies.set('tutorial', '1');
    }
  }

  return (
    <>
      <HeaderContainer className={menuOpen ? 'menu-open' : ''}>
        <HeaderLogoWrapper>
          {
            screenWidth > 544
              ? <LogoLarge />
              : <LogoSmall />
          }
        </HeaderLogoWrapper>

        <HeaderNav>
          <HeaderTab
            className={pageState === 'links' ? 'selected' : ''}
            onClick={() => setPageState('links')}
          >
            <LinkIcon />
            <span>Links</span>
          </HeaderTab>

          <HeaderTab
            className={pageState === 'profile' ? 'selected' : ''}
            onClick={() => setPageState('profile')}
          >
            <ProfileDetailsIcon />
            <span>Profile Details</span>
          </HeaderTab>
        </HeaderNav>

        <HeaderRight>
          <HeaderPreviewButton onClick={() => navigate(`/preview/${user.id}`)}>
            {
              screenWidth <= 768
                ? <PreviewMobileIcon />
                : <span>Preview</span>
            }
          </HeaderPreviewButton>

          <HeaderMenuButton
            onClick={onClickHeaderMenu}
            className={`${tutorialOpen ? 'tutorial-highlight' : ''}`}
          >
            <VerticalEllipsis />
          </HeaderMenuButton>

          <HeaderMenu ref={clickOutsideRef}>
            {
              user.token
                ? (
                    <HeaderAuthButton onClick={logoutUser}>
                      Logout
                    </HeaderAuthButton>
                )

                : (
                    <HeaderAuthButton onClick={() => navigate('/signup')}>
                      Sign up
                    </HeaderAuthButton>
                )
            }
          </HeaderMenu>
        </HeaderRight>
      </HeaderContainer>

      {
        tutorialOpen
          ? <InstructionOverlay />
          : null
      }
    </>
  )
}