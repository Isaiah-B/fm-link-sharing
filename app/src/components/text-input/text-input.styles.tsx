import styled from 'styled-components';
import { BodyM, BodyS } from '../../index.styles';

export const TextInputContainer = styled.div`
  
  &:hover {
    cursor: pointer;
  }
`;

export const LinkItemElementLabelText = styled.span`
  display: block;
  ${BodyS};
  margin-bottom: 0.4rem;
`;

export const TextInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  padding: 1.2rem 1.6rem;
  border: 1px solid var(--borders);
  border-radius: 8px;
  background-color: white;
  
  svg { margin-right: 1.2rem; }

  &.selected {
    border: 1px solid var(--purple);
    box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
  }
  
  .submitted &:has(input:invalid) {
    border: 1px solid var(--red);
  }
`;

export const TextInputInput = styled.input`
  width: 100%;
  caret-color: var(--purple);

  ${BodyM};
  font-family: inherit;
  
  &:active,
  &:focus {
    outline: none;
    cursor: text;
  }
`;

export const TextInputError = styled.span`
  display: none;

  position: absolute;
  top: 50%;
  right: 1.6rem;
  transform: translateY(-50%);

  ${BodyS};
  color: var(--red);

  .submitted input:invalid ~ & {
    display: block;
  }
`;
