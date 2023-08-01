import MockupLink from '../mockup-link/mockup-link.component';

import { MockupDataType } from '../../types';

import {
  LinksPreviewContainer,
  LinksPreviewEmail,
  LinksPreviewImageWrapper,
  LinksPreviewInfoWrapper,
  LinksPreviewList,
  LinksPreviewName,
} from './links-preview.styles';

export default function LinksPreview({ data }: { data: MockupDataType }) {
  const { links, profile } = data;
  const { firstName, lastName, email, profilePictureUrl } = profile;

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
          links.map((linkItem, index) => (
            <MockupLink key={index} platform={linkItem} isPreview />
          ))
        }
      </LinksPreviewList>
    </LinksPreviewContainer>
  );
}