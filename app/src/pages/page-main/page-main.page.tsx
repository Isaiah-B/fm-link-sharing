import HeaderMain from '../../components/headers/header-main.component';
import MainContentWrapper from '../../components/main-content-wrapper/main-content-wrapper.component';
import PhoneMockup from '../../components/phone-mockup/phone-mockup.component';
import LayoutMain from '../../layouts/layout-main/layout-main.layout';

import useScreenWidth from '../../hooks/useScreenWidth';

import { PageMainContainer } from './page-main.styles';

export default function PageMain() {
  const screenWidth = useScreenWidth();

  return (
    <PageMainContainer>
      <HeaderMain />
      <LayoutMain>
        {
          screenWidth > 928
            && <PhoneMockup />
        }
        <MainContentWrapper />
      </LayoutMain>
    </PageMainContainer>
  );
}