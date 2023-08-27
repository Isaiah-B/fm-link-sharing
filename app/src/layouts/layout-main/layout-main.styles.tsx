import styled from 'styled-components';
import { MEDIA_SIZES } from '../../constants';

export const LayoutMainContainer = styled.main`
  display: grid;
  grid-template-columns: 0.416fr 0.6fr;
  gap: 2.4rem;
  
  flex-grow: 1;

  @media ${MEDIA_SIZES.laptop_928} {
    display: flex;
    gap: 0;
  }

  @media ${MEDIA_SIZES.tablet_544} {
    padding: 0 1.6rem 1.6rem 1.6rem;
  }
`;
