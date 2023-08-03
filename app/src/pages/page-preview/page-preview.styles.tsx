import styled from 'styled-components';

export const PagePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10.7%;

  height: 100%;
  min-height: 100%;

  &.no-header {
    justify-content: center;
  }
`;

export const PagePreviewBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  
  width: 100%;
  height: 36.3%;
  border-radius: 0 0 32px 32px;
  background-color: var(--purple);
`;
