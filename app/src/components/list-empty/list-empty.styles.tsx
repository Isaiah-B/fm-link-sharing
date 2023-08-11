import styled from 'styled-components';
import { BodyM } from '../../index.styles';
import { MEDIA_SIZES } from '../../constants';

export const ListEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  text-align: center;
    
  height: 96%;
  padding: 0 12rem;
  border-radius: 12px;
  background-color: var(--light-grey);
  
  h1 { margin-bottom: 2.4rem; }

  p {
    ${BodyM};
    color: var(--grey);
  }

  @media (max-width: 71em) {
    padding: 0 3vw;
  }

  @media ${MEDIA_SIZES.tablet_544} {
    svg {
      width: 50%;
      min-width: 12.5rem;
    }
  }
`;
 