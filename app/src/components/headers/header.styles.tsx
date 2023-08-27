import styled from 'styled-components';

import { BodyM, ButtonBase, ButtonSecondary } from '../../index.styles';
import { MEDIA_SIZES } from '../../constants';

export const HeaderContainer = styled.header`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
    
  width: 100%;
  border-radius: 12px;
  padding: 1.6rem 1rem 1.6rem 2.4rem;
  background: white;

  button {
    padding: 1rem 2.7rem;
  }

  @media ${MEDIA_SIZES.tablet_544} {
    border-radius: 0;
    padding: 1.6rem;
  }
`;

export const HeaderLogoWrapper = styled.div`
  flex-shrink: 0;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media ${MEDIA_SIZES.laptop_928} {
    gap: 0;
  }

  @media ${MEDIA_SIZES.tablet_544} {
    margin-left: 4.3rem;
  }

  @media (max-width: 25em) {
    margin-left: 0;
  }
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

  @media (max-width: 43em) {
    span { display: none; }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const HeaderPreviewButton = styled(ButtonSecondary)`
  @media ${MEDIA_SIZES.tablet_768} {
    padding: 1rem 1.6rem !important;
  }
`;

export const HeaderMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem !important;
  background: white;
  border: none;

  cursor: pointer;

  &.tutorial-highlight {
    z-index: 9999;
  }
`;

export const HeaderMenu = styled.div`
  position: absolute;
  top: 8rem;
  right: 0%;
  z-index: 999;

  display: none;
  background-color: white;
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.10);

  .menu-open & {
    display: block;
  }
`;

export const HeaderAuthButton = styled.button`
  border: none;
  background: none;
  transition: all 0.3s;
  cursor: pointer;

  ${BodyM};
  font-family: inherit;
  color: var(--dark-grey);
  font-weight: 600;
  
  &:hover {
    color: var(--purple);
    background-color: var(--light-purple);
  }
`;

export const PreviewHeaderCenterButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media ${MEDIA_SIZES.tablet_544} {
    gap: 1.6rem;
    button {
      width: 50%;
    }
  }
`;
