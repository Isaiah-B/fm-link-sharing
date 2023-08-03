import { useContext, useEffect } from 'react';
import { useRecoilState, useRecoilValue,  } from 'recoil';

import MainContentLinks from '../main-content/main-content-links.component';
import MainContentProfile from '../main-content/main-content-profile.component';
import { ButtonPrimary } from '../..';

import getUserData from '../../utils/getUserData';
import { AuthContext } from '../../context/auth-context';
import { PageState, MockupDataState } from '../../recoil/store';

import {
  MainContentTop,
  MainContentWrapperContainer,
  SaveButtonWrapper,
} from '../main-content-wrapper/main-content-wrapper.styles';

export default function MainContentWrapper() {
  const { user, createAnonymousUser } = useContext(AuthContext);
  
  const pageState = useRecoilValue(PageState);
  const [mockupState, setMockupState] = useRecoilState(MockupDataState);

  // Disable save button
  const saveDisabled = () => {
    return mockupState.links.length < 1
      || !user.token && user.isAnon
  }
  
  useEffect(() => {
    const signInAnon = async () => {
      await createAnonymousUser();
    }

    if (!user.id) {
      signInAnon();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // Warn anonymous users that information will be lost when
  // navigating away from the papge
  if (user.isAnon) {
    window.onbeforeunload = () => {
      return confirm("Refreshing the page will remove any changes you've made. Are you sure you want to refresh?")
    }
  }

  // Fetch and set user's links and profile from Firestore
  useEffect(() => {
    const getData = async () => {
      const data = await getUserData(user.id);
      if (data) setMockupState(data);
    }

    if (user.id && !user.isAnon) {
      getData();
    }
  }, [user, setMockupState]);

  return (
      <MainContentWrapperContainer>
        <MainContentTop>
          {
            pageState === 'links'
              ? <MainContentLinks />
              : <MainContentProfile />
          }
        </MainContentTop>

        <SaveButtonWrapper>
          <ButtonPrimary
            name='submitBtn'
            disabled={saveDisabled()}
          >
            Save
          </ButtonPrimary>
        </SaveButtonWrapper>
      </MainContentWrapperContainer>
  );
}