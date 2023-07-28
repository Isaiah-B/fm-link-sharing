import { useRecoilValue } from 'recoil';

import MockupLink from '../mockup-link/mockup-link.component';
import { ReactComponent as PhoneIllustration } from '../../assets/images/illustration-phone-mockup.svg';

import { LinksState, MockupState } from '../../recoil/store';

import {
  MockupLinkList,
  MockupProfilePicture,
  MockupUserEmail,
  MockupUserName,
  MockupWrapper,
  PhoneMockupContainer,
} from './phone-mockup.styles';

export default function PhoneMockup() {
  const { firstName, lastName, email, profilePictureUrl } = useRecoilValue(MockupState);
  const linkList = useRecoilValue(LinksState);

  return (
    <PhoneMockupContainer>
      <MockupWrapper>
        <PhoneIllustration />
        {
          profilePictureUrl
            ? (
              <MockupProfilePicture>
                <img src={profilePictureUrl} />
              </MockupProfilePicture>

            )
            : null
        }

        {
          firstName || lastName
            ? <MockupUserName>{`${firstName} ${lastName}`}</MockupUserName>
            : null
        }

        {
          email
            ? <MockupUserEmail>{email}</MockupUserEmail>
            : null
        }
        
        <MockupLinkList>
          {
            linkList.map((linkItem, index) => (
              <MockupLink key={index} platform={linkItem} />
            ))
          }
        </MockupLinkList>
      </MockupWrapper>
    </PhoneMockupContainer>
  );
}