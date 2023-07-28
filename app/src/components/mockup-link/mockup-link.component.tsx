import { ReactComponent as ArrowIcon } from '../../assets/images/icon-arrow-right.svg';

import { PlatformType } from '../../types';

import {
  MockupLinkContainer,
  MockupLinkLeft,
  MockupLinkPreviewContainer,
} from './mockup-link.styles';

interface MockupLinkProps {
  platform: PlatformType,
  isPreview?: boolean,
}

export default function MockupLink({ platform, isPreview = false }: MockupLinkProps) {
  const {
    color,
    name,
    link,
    logo: Logo
  } = platform;

  const bgWhite = name === "Frontend Mentor";

  if (isPreview) {
    return (
      <MockupLinkPreviewContainer href={link}>
        <MockupLinkContainer
          style={{ backgroundColor: color }}
          className={bgWhite ? 'bg-white' : ''}
        >
          <MockupLinkLeft>
            <Logo />
            <span>{name}</span>
          </MockupLinkLeft>

          <ArrowIcon />
        </MockupLinkContainer>
      </MockupLinkPreviewContainer>
    )
  } 

  return (
    <>
      <MockupLinkContainer
        style={{ backgroundColor: color }}
        className={bgWhite ? 'bg-white' : ''}
      >
        <MockupLinkLeft>
          <Logo />
          <span>{name}</span>
        </MockupLinkLeft>

        <ArrowIcon />
      </MockupLinkContainer>
    </>
  );
}