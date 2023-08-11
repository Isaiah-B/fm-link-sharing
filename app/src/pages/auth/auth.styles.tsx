import styled from 'styled-components';
import { MEDIA_SIZES } from '../../constants';

export const AuthPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  height: 100%;

  @media ${MEDIA_SIZES.tablet_544} {
    justify-content: start;
    padding-top: 3.9rem;
    background-color: white;
  }
`;
