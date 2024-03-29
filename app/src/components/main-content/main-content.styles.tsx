import styled from 'styled-components';
import { BodyM, BodyS, ButtonSecondary } from '../../index.styles';
import { MEDIA_SIZES } from '../../constants';

export const ContentHeader = styled.div`
  margin-bottom: 4rem;
  
  h1 {
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 71em) {
    margin-bottom: 1.2rem;
  }

  @media ${MEDIA_SIZES.tablet_544} {
    p { margin-bottom: 4rem; }
  }
`;

// Make content scrollable when it overflows parent
export const ContentScrollable = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: auto;
  width: calc(100% - 8rem);

  &::-webkit-scrollbar {
    width: 0;
  }

  @media ${MEDIA_SIZES.tablet_768} {
    width: calc(100% - 4.8rem);
  }
`;

//-------------LINKS-------------//
export const AddLinkButton = styled(ButtonSecondary)`
  width: 100%;
`;

export const LinkItemListWrapper = styled(ContentScrollable)`
  top: 22.6rem;

  @media ${MEDIA_SIZES.laptop_928} {
    top: 19rem;
  }

  @media ${MEDIA_SIZES.tablet_544} {
    top: 22.6rem;
  }
`;

export const LinkItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  list-style: none;
`;

//-------------PROFILE-------------//
export const ProfileScrollable = styled(ContentScrollable)`
  top: 16rem;  
`;

export const ProfilePictureSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2.4rem;
  padding: 2rem;
  border-radius: 12px;
  background-color: var(--light-grey);

  @media ${MEDIA_SIZES.tablet_544} {
    flex-direction: column;
    align-items: start;
  }
`;

export const ProfilePictureSectionLeft = styled.div`
  flex-shrink: 0;
  margin-right: 1.6rem;

  ${BodyM};
  color: var(--grey);

  @media ${MEDIA_SIZES.tablet_544} {
    margin-right: 0;
    margin-bottom: 1.6rem;
  }
`;

export const ProfilePictureSectionRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  gap: 2.4rem;

  input[type="file"] {
    width: 0;
    height: 0;
    opacity: 0;
  }

  @media ${MEDIA_SIZES.tablet_544} {
    flex-direction: column;
    align-items: start;
    
    span {
      width: 100%;
    }
  }
`;

export const ProfilePictureUploadBox = styled.div<{ image: string }>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  font-family: inherit;
  color: var(--purple);

  width: 19.2rem;
  height: 19.2rem;
  padding: 6rem 0;
  border: none;
  border-radius: 12px;
  
  background: ${({ image }) => image ? `url(${image})` : "var(--light-purple)"};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  cursor: pointer;

  &:hover {
    svg {
      transform: scale(1.1);
      transition: all 0.3s;
    }
  }

  &.image-selected {
    color: white;
    svg path {
      fill: white;
    }
  }
`;

export const ProfilePictureUploadText = styled.span`
  width: 36%;

  ${BodyS};
  color: var(--grey);
`;

export const ProfileInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  padding: 2rem;
  border-radius: 12px;
  background-color: var(--light-grey);
`;

export const ProfileInfoInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const TextInputWidthWrapper = styled.div`
  width: 60%;
`;

export const ProfileInfoLabel = styled.span`
  ${BodyM};
  color: var(--grey);
`;
