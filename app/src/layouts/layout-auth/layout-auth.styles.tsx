import styled from 'styled-components';
import { MEDIA_SIZES } from '../../constants';

export const AuthLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5.8rem;

  @media ${MEDIA_SIZES.tablet_544} {
    align-items: start;
    width: 100%;
    padding: 0 3.2rem;
  }
`;
