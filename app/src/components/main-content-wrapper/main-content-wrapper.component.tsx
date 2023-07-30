import { useRecoilValue } from 'recoil';

import MainContentLinks from '../main-content/main-content-links.component';
import MainContentProfile from '../main-content/main-content-profile.component';
import { ButtonPrimary } from '../..';

import { LinksState, PageState } from '../../recoil/store';

import {
  MainContentTop,
  MainContentWrapperContainer,
  SaveButtonWrapper,
} from '../main-content-wrapper/main-content-wrapper.styles';

export default function MainContentWrapper() {
  const pageState = useRecoilValue(PageState);
  const linkItems = useRecoilValue(LinksState);

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
            disabled={linkItems.length < 1}
          >
            Save
          </ButtonPrimary>
        </SaveButtonWrapper>
      </MainContentWrapperContainer>
  );
}