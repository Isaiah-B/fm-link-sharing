import styled from 'styled-components';

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  
  transition: all 2s;

  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  max-width: 95%;
  padding: 1.6rem 2.4rem;
  border-radius: 12px;
  white-space: nowrap;

  color: var(--light-grey);
  background-color: var(--dark-grey);
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.10);

  svg { flex-shrink: 0; }
`;
