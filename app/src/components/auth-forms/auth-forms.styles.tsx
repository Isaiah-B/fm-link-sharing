import styled from 'styled-components';
import { BodyS } from '../../index.styles';
import { MEDIA_SIZES } from '../../constants';

export const AuthFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 47.6rem;
  padding: 4rem;
  border-radius: 12px;
  background-color: white;
  
  button { margin-bottom: 2.4rem; }
  
  @media ${MEDIA_SIZES.tablet_544} {
    width: 100%;
    padding: 0;
  }
`;

export const AuthFormHeader = styled.div`
  h1 { margin-bottom: 0.8rem; }

  margin-bottom: 4rem;
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-bottom: 2.4rem;
`;

export const ErrorSection = styled.div`
  margin-bottom: 2rem;
  
  ${BodyS};
  color: var(--red);
`;

export const AuthNavigate = styled.div`
  align-self: center;
  text-align: center;

  a {
    color: var(--purple);
    text-decoration: none;
  }

  @media (max-width: 26em) {
    width: 64%;
  }
`;
