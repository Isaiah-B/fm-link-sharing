import styled from 'styled-components';
import { MEDIA_SIZES } from './constants';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2.4rem;

  @media ${MEDIA_SIZES.tablet_544} {
    padding: 0;
  }
`;
