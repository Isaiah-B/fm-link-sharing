import styled from 'styled-components';
import { BodyM } from '../..';

export const LinkItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  padding: 2rem;
  border-radius: 12px;
  background-color: var(--light-grey);
`;

export const LinkItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkHeaderDragArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  h2 {
    font-weight: 700;
    color: var(--grey);
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  ${BodyM};
  font-family: inherit;
  color: var(--grey);

  &:hover {
    text-decoration: underline;
  }
`;

export const LinkItemElementContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

//--------------- DROPDOWN---------------//
export const DropdownContainer = styled.div`
  position: relative;
`;

export const LinkDropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  cursor: pointer;
  padding: 1.2rem 1.6rem;
  border: 1px solid var(--borders);
  border-radius: 8px;
  background-color: white;

  ${BodyM};
  font-family: inherit;
  
  &.selected {
    border: 1px solid var(--purple);
    box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
  }
`;

export const LinkDropdownButtonTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const DropdownMenuContainer = styled.ul`
  position: absolute;
  top: 6rem;
  z-index: 999;
  overflow-y: auto;

  max-height: 23.1rem;

  list-style: none;
  width: 100%;
  padding: 1.2rem 1.6rem;
  border: 1px solid var(--borders);
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.10);
`;

export const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  padding: 1.2rem 0;
  border-bottom: 1px solid var(--borders);
  cursor: pointer;

  span {
    font-size: 1.6rem !important;
  }

  &:hover {
    color: var(--purple);

    svg path{
      fill: var(--purple);

      &.white-path {
        fill: white;
      }
    }
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;