import styled from 'styled-components';

export const AuthFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 47.6rem;
  padding: 4rem;
  border-radius: 12px;
  background-color: white;
  
  button { margin-bottom: 2.4rem; }
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

export const AuthNavigate = styled.div`
  align-self: center;

  a {
    color: var(--purple);
    text-decoration: none;
  }  
`;
