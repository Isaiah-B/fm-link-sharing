import styled from 'styled-components';

export const InstructionOverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;

  background-color: hsla(0, 0%, 0%, 60%);
`;

export const InstructionTextBox = styled.div`
  position: absolute;
  right: 3rem;
  top: 13%;

  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  width: 18rem;
  padding: 1.4rem;
  border-radius: 8px;

  box-shadow: 0 0 10px #414141;
  background-color: white;
`;
