import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ButtonBase } from '../..';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
    
  width: 100%;
  border-radius: 12px;
  padding: 1.6rem 1.6rem 1.6rem 2.4rem;
  background: white;

  button {
    padding: 1rem 2.7rem;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const HeaderTab = styled.button`
  ${ButtonBase};
  color: var(--grey);

  svg path { fill: var(--grey); }

  &.selected {
    color: var(--purple);
    background-color: var(--light-purple);

    svg path { fill: var(--purple); }
  }

  &:hover {
    color: var(--purple);

    svg path { fill: var(--purple); }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
`;