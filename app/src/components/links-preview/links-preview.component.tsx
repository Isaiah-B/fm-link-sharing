import MockupLink from '../mockup-link/mockup-link.component';

import { MockupDataType } from '../../types';

import {
  LinksPreviewContainer,
  LinksPreviewEmail,
  LinksPreviewEmptyText,
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
        {
          profilePictureUrl
            ? (
              <LinksPreviewImageWrapper>
                <img src={profilePictureUrl} alt="" />
              </LinksPreviewImageWrapper>
            )
            : null
        }

      {
        links.length || firstName.length || lastName.length || email.length
          ? (<>
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
            </>
          )

          : <LinksPreviewEmptyText>This person doesn't have anything to show!</LinksPreviewEmptyText>
      }
    </LinksPreviewContainer>
  );
}