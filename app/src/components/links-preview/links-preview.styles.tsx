import styled from 'styled-components';
import { BodyM } from '../../index.styles';
import { MEDIA_SIZES } from '../../constants';

export const LinksPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 90rem;
  height: auto;
  max-height: 71%;

  padding: 4.8rem 5.6rem;
  border-radius: 24px;
  background-color: white;
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.10);

  @media ${MEDIA_SIZES.tablet_544} {
    width: 100%;
    max-height: 100%;
    height: calc(100% - 7.4rem);
    border-radius: 0;
  }
`;

export const LinksPreviewImageWrapper = styled.div`
  flex-shrink: 0;
  
  overflow: hidden;
  margin-bottom: 2.6rem;

  width: 10.4rem;
  height: 10.4rem;

  padding: 0.4rem;
  border-radius: 50%;
  border: 4px solid var(--purple);
  background-color: transparent;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const LinksPreviewInfoWrapper = styled.div`
  text-align: center;
  margin-bottom: 5.6rem;
`;

export const LinksPreviewName = styled.h1`
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const LinksPreviewEmail = styled.span`
  display: block;

  ${BodyM};
  color: var(--grey);

  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const LinksPreviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;

  list-style: none;
  width: 50%;
  min-width: 23.7rem;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const LinksPreviewEmptyText = styled.h2`
  text-align: center;
`;