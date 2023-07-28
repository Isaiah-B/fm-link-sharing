import { atom } from "recoil";
import { PlatformType } from "../types";

type PageType = {
  page: 'links' | 'profile',
}

interface MockupProps {
  profilePictureUrl: string,
  firstName: string,
  lastName: string,
  email?: string,
}

export const PageState = atom<PageType['page']>({
  key: "Page",
  default: 'links'
});

export const LinksState = atom({
  key: "Links",
  default: [] as PlatformType[],
});

export const MockupState = atom<MockupProps>({
  key: "Mockup",
  default: {
    profilePictureUrl: '',
    firstName: '',
    lastName: '',
    email: '',
  }
});
