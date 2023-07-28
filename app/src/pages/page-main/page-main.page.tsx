import HeaderMain from '../../components/headers/header-main.component';
import MainContentWrapper from '../../components/main-content-wrapper/main-content-wrapper.component';
import PhoneMockup from '../../components/phone-mockup/phone-mockup.component';
import LayoutMain from '../../layouts/layout-main/layout-main.layout';

import { PageMainContainer } from './page-main.styles';

export default function PageMain() {
  return (
    <PageMainContainer>
      <HeaderMain />
      <LayoutMain>
        <PhoneMockup />
        <MainContentWrapper />
      </LayoutMain>
    </PageMainContainer>
  );
}