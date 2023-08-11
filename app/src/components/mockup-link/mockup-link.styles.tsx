import styled from 'styled-components';

import { BodyM, BodyS } from '../../index.styles';

export const MockupLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.3rem 1.6rem;
  border-radius: 8px;
  border: 1px solid transparent;
  
  svg path {
    fill: white;

    &.white-path { fill: #737373; }
  }

  &.bg-white { 
    border: 1px solid var(--borders);
    svg path { fill: #737373; }
  }
`;

export const MockupLinkPreviewContainer = styled.a`
  text-decoration: none;

  span {
    ${BodyM};
  }

  &:first-of-type(div) {
    padding: 1.6rem;
  }
`;

export const MockupLinkLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  ${BodyS};
  color: white;

  .bg-white & {
    color: var(--dark-grey);    
  }
`;
