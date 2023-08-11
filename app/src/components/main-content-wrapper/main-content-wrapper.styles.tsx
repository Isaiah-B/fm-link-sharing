import styled from 'styled-components';
import { MEDIA_SIZES } from '../../constants';

export const MainContentWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${MEDIA_SIZES.laptop_928} {
    flex-grow: 1;
  }
`;

export const MainContentTop = styled.div`
  display: flex;
  flex-direction: column;
  
  position: relative;
  flex-grow: 1;
  
  padding: 4rem 4rem 3rem 4rem;
  border-radius: 12px 12px 0 0;
  background-color: white;

  @media ${MEDIA_SIZES.tablet_768} {
    padding: 2.4rem;
  }
`;

export const SaveButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  z-index: 0;
  width: 100%;
  padding: 2.4rem 4rem;
  border-top: 1px solid var(--borders);
  border-radius: 0 0 12px 12px;
  background-color: white;
`;

