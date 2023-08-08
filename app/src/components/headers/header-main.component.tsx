import { useContext } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import { ReactComponent as LogoLarge } from '../../assets/images/logo-devlinks-large.svg';
import { ReactComponent as LinkIcon } from '../../assets/images/icon-link.svg';
import { ReactComponent as ProfileDetailsIcon } from '../../assets/images/icon-profile-details-header.svg';
import { ButtonPrimary, ButtonSecondary } from "../..";

import { PageState } from "../../recoil/store";
import { AuthContext } from "../../context/auth-context";

import {
  HeaderContainer,
  HeaderLink,
  HeaderNav,
  HeaderRight,
  HeaderTab,
} from "./header.styles";

const cookies = new Cookies;

export default function HeaderMain() {
  const [pageState, setPageState] = useRecoilState(PageState);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutUser = () => {
    cookies.remove('token');
    cookies.remove('id');

    navigate('/login');
  };

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

      <HeaderRight>
        {
          user.token
            ? (
                <ButtonPrimary
                  onClick={logoutUser}
                >
                  Log out
                </ButtonPrimary>
            )

            : (
                <HeaderLink to={'/signup'}>
                  <ButtonPrimary>
                  Sign up
                  </ButtonPrimary>
                </HeaderLink>
            )
        }

        <HeaderLink to={`/preview/${user.id}`}>
          <ButtonSecondary>
            Preview
          </ButtonSecondary>
        </HeaderLink>
      </HeaderRight>
    </HeaderContainer>
  )
}