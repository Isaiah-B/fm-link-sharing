import { useContext, useEffect } from 'react';
import { useRecoilState, useRecoilValue,  } from 'recoil';
import { doc, getDoc } from 'firebase/firestore';

import MainContentLinks from '../main-content/main-content-links.component';
import MainContentProfile from '../main-content/main-content-profile.component';
import { ButtonPrimary } from '../..';

import { auth, store } from '../../firebase';
import { LINK_SITES } from '../../constants';
import { UserDataType } from '../../types';
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
    const getUserData = async () => {
      if (user.id) {
        const linkDocRef = doc(store, 'userLinks', user.id);
        const dataDoc = await getDoc(linkDocRef);
        const data = dataDoc.data();

        if (data) {
          const dataLinks: UserDataType['links'] = data.links;
          const dataProfile: UserDataType['profile'] = data.profile;

          // Get full link object using the "name" field of the dataLink object
          const convertedLinks = dataLinks.map((item) => {
            return { ...LINK_SITES[item.name.toLowerCase()], link: item.link };
          });


          const pictureUrl = auth.currentUser?.photoURL;
          setMockupState({
            links: convertedLinks,
            profile: {
              ...dataProfile,
              profilePictureUrl: pictureUrl || ''
            }
          });
        }
      } 
    }

    getUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  
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