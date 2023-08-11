import styled from 'styled-components';
import { MEDIA_SIZES } from '../../constants';

export const PageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  
  min-height: 100%;

  @media ${MEDIA_SIZES.tablet_544} {
    gap: 1.6rem;
  }
`;
