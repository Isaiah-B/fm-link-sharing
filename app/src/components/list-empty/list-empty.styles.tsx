import styled from 'styled-components';
import { BodyM } from '../..';

export const ListEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  text-align: center;
    
  height: 100%;
  padding: 0 12rem;
  border-radius: 12px;
  background-color: var(--light-grey);

  svg { margin-bottom: 4rem; }
  
  h1 { margin-bottom: 2.4rem; }

  p {
    ${BodyM};
    color: var(--grey);
  }
`;
 