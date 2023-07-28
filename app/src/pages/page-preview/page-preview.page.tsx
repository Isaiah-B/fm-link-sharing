import HeaderPreview from '../../components/headers/header-preview.component';
import LinksPreview from '../../components/links-preview/links-preview.component';

import {
  PagePreviewBackground,
  PagePreviewContainer,
} from './page-preview.styles';

export default function PagePreview() {
  return (
    <PagePreviewContainer>
      <PagePreviewBackground />
      <HeaderPreview />
      <LinksPreview />
    </PagePreviewContainer>
  );
}