import { useRecoilValue } from 'recoil';

import MockupLink from '../mockup-link/mockup-link.component';

import { LinksState, MockupState } from '../../recoil/store';

import {
  LinksPreviewContainer,
  LinksPreviewEmail,
  LinksPreviewImageWrapper,
  LinksPreviewInfoWrapper,
  LinksPreviewList,
  LinksPreviewName,
} from './links-preview.styles';

export default function LinksPreview() {
  const linkList = useRecoilValue(LinksState);
  const { profilePictureUrl, firstName, lastName, email } = useRecoilValue(MockupState);

  return (
    <LinksPreviewContainer>
      <LinksPreviewImageWrapper>
        <img src={profilePictureUrl} alt="" />
      </LinksPreviewImageWrapper>

      <LinksPreviewInfoWrapper>
        <LinksPreviewName>{`${firstName} ${lastName}`}</LinksPreviewName>
        <LinksPreviewEmail>{email}</LinksPreviewEmail>
      </LinksPreviewInfoWrapper>

      <LinksPreviewList>
        {
          linkList.map((linkItem, index) => (
            <MockupLink key={index} platform={linkItem} isPreview />
          ))
        }
      </LinksPreviewList>
    </LinksPreviewContainer>
  );
}