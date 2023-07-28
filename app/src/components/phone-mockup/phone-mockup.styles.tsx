import styled, { css } from 'styled-components';

export const PhoneMockupContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  border-radius: 12px;
  background-color: white;
`;

export const MockupWrapper = styled.div`
  position: relative;
`;

export const MockupProfilePicture = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 9.6rem;
  height: 9.6rem;
  padding: 0.4rem;

  border-radius: 50%;
  background-color: var(--purple);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const MockupInfoText = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  width: 90%;
  background-color: white;

  span {
    line-height: 150%;
  }
`;

export const MockupUserName = styled.span`
  ${MockupInfoText};

  top: 29%;
  padding: 0.4rem 0;

  word-break: break-all;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--dark-grey);
`;

export const MockupUserEmail = styled.span`
  ${MockupInfoText};

  top: 33%;
  padding: 1.2rem 0;

  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--grey);
`;

export const MockupLinkList = styled.ul`
  position: absolute;
  left: 50%;
  top: 43.3%;
  transform: translateX(-50%);
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  list-style: none;
  width: 23.9rem;
  max-height: 31rem;
  background-color: white;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;
