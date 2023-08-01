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
  const { user } = useContext(AuthContext);
  
  const pageState = useRecoilValue(PageState);
  const [mockupState, setMockupState] = useRecoilState(MockupDataState);

  // Fetch and set user's links and profile from Firestore
  useEffect(() => {
    const getData = async () => {
      const data = await getUserData(user.id);
      if (data) setMockupState(data);
    }

    getData();
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
            disabled={mockupState.links.length < 1}
          >
            Save
          </ButtonPrimary>
        </SaveButtonWrapper>
      </MainContentWrapperContainer>
  );
}