import styled, { createGlobalStyle, css } from "styled-components";

export const BodyM = css`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;  
`;

export const BodyS = css`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 150%;  
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: hsl(252, 100%, 62%);
    --purple-hover: hsl(252, 100%, 84%);
    --light-purple: hsl(252, 100%, 96%);
    --dark-grey: hsl(0, 0%, 20%);
    --grey: hsl(0, 0%, 45%);
    --borders: hsl(0, 0%, 85%);
    --light-grey: hsl(0, 0%, 98%);
    --red: hsl(0, 100%, 61%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    height: 100vh;
  }

  body {
    min-height: 100%;
    height: 100%;

    font-family: 'Instrument Sans', sans-serif;
    color: var(--dark-grey);
    background: var(--light-grey);
  }

  #root {
    height: 100%;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 150%;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 150%;
  }

  input {
    border: none;
    background: none;
    cursor: pointer;

    &::placeholder {
      ${BodyM};
      color: var(--dark-grey);

      opacity: 0.5;
    }
  }
`;

export const ButtonBase = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  padding: 1rem 2.7rem;
  border: none;
  border-radius: 8px;
  background: none;
  transition: all 0.3s;
  cursor: pointer;

  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const ButtonPrimary = styled.button`
  ${ButtonBase};
  
  color: white;
  background-color: var(--purple);

  &:hover {
    background-color: var(--purple-hover);
    box-shadow: 0px 0px 32px 0px hsla(252, 100%, 62%, 0.25);
  }

  &:disabled {
    opacity: 0.25;
    background-color: var(--purple);
  }
`;

export const ButtonSecondary = styled.button`
  ${ButtonBase};
  
  border: 1px solid var(--purple);
  color: var(--purple);
  background-color: transparent;

  &:hover {
    background-color: var(--light-purple);
  }

  &:disabled {
    opacity: 0.25;
  }
`;
